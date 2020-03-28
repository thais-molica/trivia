import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Box = ({ children }) => (
  <>
    <style jsx>{styles}</style>
    <div className="box">
      {children}
    </div>
  </>
);

export default Box;

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired
};
