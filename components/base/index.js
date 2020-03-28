import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Base = ({ children }) => (
  <>
    <style jsx global>{styles}</style>
    {children}
  </>
);

export default Base;

Base.propTypes = {
  children: PropTypes.array.isRequired,
};
