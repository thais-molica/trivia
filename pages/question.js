import React, {useState, useEffect} from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import Base from "../components/base";
import styles from "../assets/style/pages/question";
import CLOSE from "../assets/imgs/close-btn.svg";
import Level from "../components/level";
import Box from "../components/box";
import Button from "../components/button";
import Modal from "../components/modal";

const Question = () => {

  const shuffle = array => {
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array;
  }

  const QuestionService = (category, difficulty) => {
    axios
      .get(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty${difficulty}`)
      .then(function(response) {
        if(!data) {
          response = response.data.results[0];
          const questions = response.incorrect_answers;
          setData(response);
          setTitle(response.category);
          setText(response.question);
          setDifficulty(response.difficulty);
          questions.push(response.correct_answer);
          shuffle(questions);
          setCorrectAnswer(response.correct_answer);
          setList(questions);
        }
      })
      .catch(function(error) {
        return error;
      });
  };


  useEffect(() => {
    QuestionService(9,2)
  }, [])

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(''); 
  const [list, setList] = useState('');
  const number = 1;

  const [selectedId, setSelectedId] = useState(null);
  const [hasAnswer, setHasAnswer] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [data, setData] = useState(null);

  const handleSelect = (id, item) => {
    setSelectedId(id);
    if(item == correctAnswer) {
      setRightAnswer(true)
    } else {
      setRightAnswer(false)
    }
    console.log(item, correctAnswer, rightAnswer)
  }

  const setAnswer = () => {
    setHasAnswer(true);
  }

  return (
    <>
      <style jsx>{styles}</style>
      <Base className="page-question">
        <h1>
          {title}
          <a href="/">
            <img src={CLOSE} alt="Fechar" /> Fechar
          </a>
        </h1>
        <Box>
          <h2>
            Questão {number} <Level id={difficulty} />
          </h2>
          <p>{text}</p>
          <ul className="question-item">
            {list && list.map((item, index) => (
              <li key={uuid()}>
                <Box onClick={()=> handleSelect(index, item)} active={selectedId == index}>{item}</Box>
              </li>
            ))}
          </ul>
          <Button label="Responder" onClick={setAnswer} disabled={!selectedId} />
        </Box>
      </Base>
      {hasAnswer && <Modal success={rightAnswer}  />}
    </>
  );
};

export default Question;
