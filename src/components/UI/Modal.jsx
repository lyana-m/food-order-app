import React from "react";
import ReactDom from "react-dom";
import cl from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={cl.backdrop} onClick={props.onBackDropClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={cl.modal}>
      <div className={cl.content}>{props.children}</div>
    </div>
  );
};

const PortalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onBackDropClick={props.onBackDropClick} />,
        PortalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
