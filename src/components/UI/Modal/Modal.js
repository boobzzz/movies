import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import classes from './Modal.module.css';

const ModalContainer = (props) => {
    const { modal, toggle, title, modalBody } = props
    const closeBtn =
        <button className={classes.CloseBtn} onClick={toggle}>
            &times;
        </button>

    return (
        <Modal className={classes.Modal} isOpen={modal} toggle={toggle}>
            <ModalHeader className={classes.Header} toggle={toggle} close={closeBtn}>
                {title}
            </ModalHeader>
            <ModalBody>
                {modalBody}
            </ModalBody>
        </Modal>
    )
}

export default ModalContainer;
