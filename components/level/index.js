import React from 'react';
import PropTypes from "prop-types";
import styles from "./styles";
import Stars from '../star';

const Level = ({ id }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <div>
        <Stars alt="level" />
        <Stars alt="level" disabled={id == 'easy'} />
        <Stars alt="level" disabled={id == 'medium' || id == 'easy'} />
        <span>{id}</span>
      </div>
    </>
  );
};

export default Level;

Level.propTypes = {
  id: PropTypes.string.isRequired
};