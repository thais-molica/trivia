import React from 'react';
import PropTypes from "prop-types";
import styles from "./styles";

const Score = ({ correct, error }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <div>
        <span><strong>{correct}</strong> acertos </span>
        <span><strong>{error}</strong> erros</span>
      </div>
    </>
  );
};

export default Score;

Score.propTypes = {
  correct: PropTypes.number.isRequired, 
  error: PropTypes.number.isRequired,
};