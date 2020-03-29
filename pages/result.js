import React from 'react';
import { v4 as uuid } from "uuid";
import Link from "next/link";
import Base from '../components/base';
import Box from '../components/box';
import Button from '../components/button';
import Score from '../components/score';
import FullScore from '../components/fullScore';
import styles from '../assets/style/pages/result';

const Result = () => {
  const total = [
    {title: 'Fácil', correct: 2, error: 1},
    {title: 'Médio', correct: 2, error: 1},
    {title: 'Difícil', correct: 2, error: 1},
  ]
  return (
    <>
    <style jsx>{styles}</style>
      <Base className="page-result">
          <Box>
            <header>
              <span>
              <h1>Parabéns!</h1>
              <h2>Você finalizou o teste</h2>
              </span>
              <p>Veja seu desempenho nas questões</p>
            </header>
            <FullScore correct={3} error={3} />
            <ul>
              {total.map(item => <li key={uuid()}><Score title={item.title} correct={item.correct} error={item.error} /></li>)}
            </ul>
            <Link href="/">
              <Button label="Voltar ao início" onClick={()=>{}}/>
            </Link>
          </Box>
      </Base>
      </>
  );
};

export default Result;
