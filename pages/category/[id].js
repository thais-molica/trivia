import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import axios from "axios";
// import { useCookies } from 'react-cookie';
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
  const dispatch = useDispatch();

  let totalAnwser = 1;
  // useSelector(state =>
  //   state.map(item => {if(item.id == categoryId) totalAnwser = item.total +=1})
  // );

  const QuestionService = (category, difficulty = 1) => {
    if (category) {
      axios
        .get(
          `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficultyDic[difficulty]}`
        )
        .then(function(response) {
          response = response.data.results[0];
          const questions = response.incorrect_answers;
          setTitle(response.category);
          setText(response.question);
          setDifficulty(response.difficulty);
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
  const [difficulty, setDifficulty] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [list, setList] = useState("");

  const [selectedId, setSelectedId] = useState(null);
  const [hasAnswer, setHasAnswer] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  useEffect(() => {
    console.log(selectedId)
  }, [selectedId]);

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
    dispatch(incrementTotalAwswer(categoryId, isCorrectAnswer));

    if (totalAnwser == 10) {
      window.location.href = `/result/${categoryId}`;
    } else {
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
