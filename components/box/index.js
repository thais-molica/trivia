import React from 'react';
import PropTypes from 'prop-types';
import style from './styles';


const Box = ({ children, active, onClick }) => {
  const { className, styles } = style(active)
  const handleClick = () => {
    if(onClick) onClick()
  }
  return (
  <>
    <div className={`${className} box`} onClick={handleClick}>
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
