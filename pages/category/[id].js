import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementTotalAwswer,
  getData
} from "../../redux/actions/questionActions";
import Base from "../../components/base";
import styles from "../../assets/style/pages/question";
import CLOSE from "../../assets/imgs/close-btn.svg";
import Level from "../../components/level";
import Box from "../../components/box";
import Button from "../../components/button";
import Modal from "../../components/modal";
import shuffle from "../../utils/shuffle";
import difficultyDic from "../../utils/difficulty";

const Question = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const categoryId = parseInt(router.query.id);
  const [difficulty, setDifficulty] = useState(1);
  const state = useSelector(state => state);
  const [list, setList] = useState("");

  useEffect(() => {
    dispatch(getData(categoryId, getDifficulty()));
  }, [categoryId]);

  useEffect(() => {
    if (state.data.correct_answer && state.data.incorrect_answers) {
      let arr = state.data.incorrect_answers;
      arr.push(state.data.correct_answer);
      shuffle(arr);
      setList(arr);
    }
  }, [state]);

  const redirectToResult = () => {
    Router.push(`/result/${categoryId}`);
  };

  let totalAnwser = 1;
  const itemIndex = state.answer.findIndex(el => el.id == categoryId);
  if (itemIndex >= 0) {
    if (state.answer[itemIndex].total >= 10) {
      redirectToResult();
    }
    totalAnwser = state.answer[itemIndex].total + 1;
  }

  const [selectedId, setSelectedId] = useState(null);
  const [hasAnswer, setHasAnswer] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const getDifficulty = () => {
    if (itemIndex >= 0) {
      if (
        state.answer[itemIndex].difficulty == state.answer[itemIndex].prevDifficulty &&
        state.answer[itemIndex].isCorrect == state.answer[itemIndex].prevCorrect
      ) {
        if (isCorrectAnswer && state.answer[itemIndex].difficulty < 2) {
          return state.answer[itemIndex].difficulty + 1;
        }
        if (!isCorrectAnswer && state.answer[itemIndex].difficulty > 0) {
          return state.answer[itemIndex].difficulty - 1;
        }
      }
      return state.answer[itemIndex].difficulty;
    }
    return 1;
  };

  const handleSelect = (id, item) => {
    setSelectedId(id);
    if (item == state.data.correct_answer) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  };

  const submitAnswer = () => {
    setHasAnswer(true);
    const question = {
      text: state.question,
      selectedAnswer: list[selectedId],
      difficulty: difficultyDic[difficulty],
      correctAnswer: state.data.correct_answer,
      dateTime: new Date().toLocaleString(),
      isCorrect: isCorrectAnswer
    };
    dispatch(
      incrementTotalAwswer(categoryId, isCorrectAnswer, difficulty, question)
    );
  };

  const clearAnswer = () => {
    setHasAnswer(false);
    setSelectedId(null);
  };

  const nextQuestion = () => {
    setDifficulty(getDifficulty());
    clearAnswer();
    dispatch(getData(categoryId, getDifficulty()));
  };

  const handleNext = () => {
    if (totalAnwser <= 10) {
      nextQuestion();
    } else {
      redirectToResult();
    }
  };

  return (
    <>
      <Head>
        <title>
          {!state.isFetching ? state.data.category : ''} - Question {totalAnwser}
        </title>
      </Head>
      <style jsx>{styles}</style>
      <Base className="page-question">
        {!state.isFetching && (
          <>
            <h1>
              {state.data.category}
              <a href="/">
                <img src={CLOSE} alt="Close" /> Close
              </a>
            </h1>
            <Box>
              <h2>
                Question {totalAnwser} <Level id={state.data.difficulty} />
              </h2>
              <p>{state.data.question}</p>
              <ul className="question-item">
                {list &&
                  list.map((item, index) => (
                    <li key={uuid()}>
                      <Box
                        onClick={() => handleSelect(index, item)}
                        active={selectedId == index}
                      >
                        {item}
                      </Box>
                    </li>
                  ))}
              </ul>
              <footer>
                <Button
                  label="Answer"
                  onClick={submitAnswer}
                  disabled={selectedId == null}
                />
              </footer>
            </Box>
          </>
        )}
        {state.error && "Ocorreu um erro"}
      </Base>
      {hasAnswer && <Modal success={isCorrectAnswer} onClose={handleNext} />}
    </>
  );
};

export default Question;
