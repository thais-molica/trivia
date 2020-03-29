import React from 'react';
import PropTypes from 'prop-types';
import style from './styles';


const Box = ({ children, active }) => {
  const { className, styles } = style(active)
  
  return (
  <>
    <div className={`${className} box`}>
      {children}
    </div>
    {styles}
  </>
)};

export default Box;

Box.defaultProps = {
  active: false
};

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  active: PropTypes.bool,
};
