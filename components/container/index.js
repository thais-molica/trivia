import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Container = ({ children, className }) => (
  <>
    <style jsx>{styles}</style>
    <div className={className}>
        {children}
    </div>
  </>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string,
};
