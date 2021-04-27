import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import styles from './Modal.module.css'

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>
}
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}
const protalElement = document.getElementById('overlays')
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        protalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        protalElement
      )}
    </Fragment>
  )
}

export default Modal
