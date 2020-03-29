import React from 'react';
import PropTypes from "prop-types";
import styles from "./styles";

const Score = ({ title, correct, error }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <>
        <strong>{title}</strong>
        <span>Acertos: {correct}</span>
        <span>Erros: {error}</span>
      </>
    </>
  );
};

export default Score;

Score.propTypes = {
  title: PropTypes.string.isRequired, 
  correct: PropTypes.number.isRequired, 
  error: PropTypes.number.isRequired,
};