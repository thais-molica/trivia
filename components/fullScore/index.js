import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const Score = ({ correct, error }) => {
  const setPlural = (text, size) => (`${text}${size > 1 ? 's' : '' }`)
  
  return (
    <>
      <style jsx>{styles}</style>
      <div>
        <span>
          <strong>{correct}</strong> {setPlural('acerto', correct)}
        </span>
        <span>
          <strong>{error}</strong> {setPlural('erro', error)}
        </span>
      </div>
    </>
  );
};

export default Score;

Score.propTypes = {
  correct: PropTypes.number.isRequired,
  error: PropTypes.number.isRequired
};
