import React from "react";
import { v4 as uuid } from "uuid";
import Base from "../components/base";
import styles from "../assets/style/pages/question";
import CLOSE from "../assets/imgs/close-btn.svg";
import Level from "../components/level";
import Box from "../components/box";
import Button from "../components/button";
import Modal from "../components/modal";

const Question = () => {
  const title = "História";
  const number = 1;
  const text =
    "Sobre a conhecida Idade dos Metais, na transição entre a Pré-História e a História, é possível afirmar que";
  const answerList = [
    {
      text:
        "não existe ligação entre o uso dos metais e a formação de grandes impérios 1",
      id: 1
    },
    {
      text:
        "não existe ligação entre o uso dos metais e a formação de grandes impérios 2",
      id: 5
    },
    {
      text:
        "não existe ligação entre o uso dos metais e a formação de grandes impérios 3",
      id: 9
    },
    {
      text:
        "não existe ligação entre o uso dos metais e a formação de grandes impérios 4",
      id: 3
    }
  ];
  const selectedId = 9;

  return (
    <>
      <style jsx>{styles}</style>
      <Modal  />
      <Base className="page-question">
        <h1>
          {title}
          <a href="/">
            <img src={CLOSE} alt="Fechar" /> Fechar
          </a>
        </h1>
        <Box>
          <h2>
            Questão {number} <Level id={1} />
          </h2>
          <p>{text}</p>
          <ul className="question-item">
            {answerList.map(item => (
              <li key={uuid()}>
                <Box active={selectedId == item.id}>{item.text}</Box>
              </li>
            ))}
          </ul>
          <Button label="Responder" onClick={() => {}} disabled />
        </Box>
      </Base>
    </>
  );
};

export default Question;
