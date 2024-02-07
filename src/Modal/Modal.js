import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};
const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
