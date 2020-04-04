import React from 'react';
import PropTypes from "prop-types";
import styles from "./styles";
import Stars from '../star';
import difficultyDic from '../../utils/difficulty';

const Level = ({ id }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <div>
        <Stars alt="level" />
        <Stars alt="level" disabled={id < 1} />
        <Stars alt="level" disabled={id < 2} />
        <span>{difficultyDic[id]}</span>
      </div>
    </>
  );
};

export default Level;

Level.propTypes = {
  id: PropTypes.number.isRequired
};