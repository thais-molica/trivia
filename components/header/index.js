import React from 'react';
import PropTypes from "prop-types";
import styles from "./styles";

const Header = ({ text }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <header><a href="/">{text}</a></header>
    </>
  );
};

export default Header;

Header.defaultProps = {
  text: 'Teste Dev Frontend'
}
Header.propTypes = {
  text: PropTypes.string
};