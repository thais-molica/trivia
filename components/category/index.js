import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import styles from './styles';

const Category = ({ name }) => (
  <>
    <style jsx>{styles}</style>
    <Box>
      {name}
    </Box>
  </>
);

export default Category;

Category.propTypes = {
  name: PropTypes.string.isRequired,
};
