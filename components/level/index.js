import React from 'react';
import PropTypes from "prop-types";
import styles from "./styles";
import Stars from '../star';

const Level = ({ id }) => {
  const levelList = ['Fácil', 'Médio', 'Difícil'];
  return (
    <>
      <style jsx>{styles}</style>
      <div>
        <Stars alt="nível" />
        <Stars alt="nível" disabled={id < 2} />
        <Stars alt="nível" disabled={id < 3} />
        <span>{levelList[id - 1]}</span>
      </div>
    </>
  );
};

export default Level;

Level.propTypes = {
  id: PropTypes.number.isRequired
};