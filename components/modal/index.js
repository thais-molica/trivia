import React from "react";
import PropTypes from "prop-types";
import Button from "../button";
import style, { div } from "./styles";
import ERROR from "../../assets/imgs/error.svg";
import SUCCESS from "../../assets/imgs/success.svg";
import ARROW from "../../assets/imgs/arrow.svg";

const Modal = ({ onClose, success }) => {
  const { className, styles } = div(success);
  const handleClose = () => {
    if (onClose) onClose();
  };
  return (
    <>
      <style jsx>{style}</style>
      {styles}
      <span />
      <div className={className}>
        <em>
          <img
            src={success ? SUCCESS : ERROR}
            alt={success ? "sucesso" : "erro"}
          />
        </em>
        <p>{success ? "Você acertou!" : "Você errou!"}</p>
        <Button
          label={
            <>
              Avançar <img src={ARROW} alt="Avançar" />
            </>
          }
          onClick={handleClose}
        />
      </div>
    </>
  );
};

export default Modal;

Modal.defaultProps = {
  success: false
};
Modal.propTypes = {
  onClose: PropTypes.func,
  success: PropTypes.bool
};
