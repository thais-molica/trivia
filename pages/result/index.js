import React from 'react';
import { v4 as uuid } from "uuid";
import Base from '../../components/base';
import Box from '../../components/box';
import Button from '../../components/button';
import Score from '../../components/score';
import styles from './styles';

const Result = () => {
  const total = [
    {title: 'Fácil', correct: 2, error: 1},
    {title: 'Médio', correct: 2, error: 1},
    {title: 'Difícil', correct: 2, error: 1},
  ]
  return (
    <>
    <style jsx>{styles}</style>
      <Base>
          <Box>
            <header>
              <span>
              <h1>Parabéns!</h1>
              <h2>Você finalizou o teste</h2>
              </span>
            </header>
            <p>Veja seu desempenho nas questões</p>
            <ul>
              {total.map(item => <li key={uuid()}><Score title={item.title} correct={item.correct} error={item.error} /></li>)}
            </ul>
            <Button label="Voltar ao início" onClick={()=>{}}/>
          </Box>
      </Base>
      </>
  );
};

export default Result;
