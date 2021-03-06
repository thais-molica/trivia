import React from "react";
import PropTypes from "prop-types";
import Header from "..//header";
import Container from "..//container";
import styles from "./styles";

const Base = ({ children, className }) => {
  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <Header />
      <Container className={className}>{children}</Container>
    </>
  );
};

export default Base;

Base.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.bool
  ]).isRequired,
  className: PropTypes.string
};
