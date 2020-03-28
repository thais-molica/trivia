import React from 'react';
// import { v4 as uuid } from 'uuid';
// import Link from 'next/link';
import Base from '../../components/base';
import Header from '../../components/header';
import Container from '../../components/container';
import styles from './styles';
import CLOSE from '../../assets/imgs/close-btn.svg';
import Level from "../../components/level";

const Question = () => {  

  const title = 'História';

  return (
    <>
    <style jsx>{styles}</style>
      <Base>
        <Header />
        <Container>
          <h1>
            {title}
            <span><img src={CLOSE} alt="Fechar" /> Fechar</span>
          </h1>
          <Level id={1} />
        </Container>
      </Base>
      </>
  );
};

export default Question;
