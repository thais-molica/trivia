import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = ({ label, onClick, disabled }) => (
  <>
    <style jsx>{styles}</style>
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  </>
);

export default Button;

Button.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
