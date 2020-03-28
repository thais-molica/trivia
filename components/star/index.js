import React from 'react';
import PropTypes from "prop-types";
import STAR from '../../assets/imgs/star.svg';

const Stars = ({ alt, disabled }) => {
  return (
    <>
      <style jsx>{`
        img {
          opacity: ${disabled ? .7 : 1};
        }
     `}</style>
      <img src={STAR} alt={alt}  />
    </>
  );
};

export default Stars;

Stars.propTypes = {
  alt: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};