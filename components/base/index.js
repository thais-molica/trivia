import React from "react";
import PropTypes from "prop-types";
import Header from "..//header";
import Container from "..//container";
import styles from "./styles";

const Base = ({ children }) => (
  <>
    <style jsx global>
      {styles}
    </style>
    <Header />
    <Container>{children}</Container>
  </>
);

export default Base;

Base.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired
};
