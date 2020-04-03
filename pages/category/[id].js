import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { incrementTotalAwswer } from "../../redux/actions/questionActions";
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
  const router = useRouter();
  const categoryId = parseInt(router.query.id);

  const redirectToResult = () => {
    Router.push(`/result/${categoryId}`);
  }

  const dispatch = useDispatch();

  let totalAnwser = 1;
  const state = useSelector(state => state);
  console.log(state)
  const itemIndex = state.findIndex(el => el.id == categoryId);
  if (itemIndex >= 0) {
    if(state[itemIndex].total >= 10) {redirectToResult()}
    totalAnwser = state[itemIndex].total + 1;
  }

  let difficultyIndex = 1;
  let difficulty = difficultyDic[difficultyIndex];

  const QuestionService = (category, difficulty = difficulty) => {
    if (category) {
      axios
        .get(
          `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}`
        )
        .then(function(response) {
          response = response.data.results[0];
          const questions = response.incorrect_answers;
          setTitle(response.category);
          setText(response.question);
          questions.push(response.correct_answer);
          shuffle(questions);
          setCorrectAnswer(response.correct_answer);
          setList(questions);
          setisLoading(false);
        })
        .catch(function(error) {
          return error;
        });
    }
  };

  useEffect(() => {
    QuestionService(categoryId, 0);
  }, [categoryId]);

  const [isLoading, setisLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [list, setList] = useState("");

  const [selectedId, setSelectedId] = useState(null);
  const [hasAnswer, setHasAnswer] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleSelect = (id, item) => {
    setSelectedId(id);
    if (item == correctAnswer) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  };

  const submitAnswer = () => {
    setHasAnswer(true);
  };

  const clearAnswer = () => {
    setHasAnswer(false);
    setSelectedId(null);
    setisLoading(true);
  };

  const nextQuestion = () => {
    clearAnswer();
    QuestionService(categoryId, 0);
  };

  const handleNext = () => {
    dispatch(incrementTotalAwswer(categoryId, isCorrectAnswer, difficultyIndex));

    if (totalAnwser < 10) {
      nextQuestion();
    }
  };

  return (
    <>
      <style jsx>{styles}</style>
      <Base className="page-question">
        {!isLoading && (
          <>
            <h1>
              {title}
              <a href="/">
                <img src={CLOSE} alt="Fechar" /> Fechar
              </a>
            </h1>
            <Box>
              <h2>
                Questão {totalAnwser} <Level id={difficulty} />
              </h2>
              <p>{text}</p>
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
                  label="Responder"
                  onClick={submitAnswer}
                  disabled={selectedId == null}
                />
              </footer>
            </Box>
          </>
        )}
      </Base>
      {hasAnswer && <Modal success={isCorrectAnswer} onClose={handleNext} />}
    </>
  );
};

export default Question;
