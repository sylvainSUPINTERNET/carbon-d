import {Modal, Button} from "react-bootstrap";
import react, {useState} from 'react';

export const ButtonPpc = (props) =>{
    return ( <div>

        {
            props.mustBeConfirmed && props.mustBeConfirmed === true && 
            <Modal show={props.modalDisplay} onHide={props.handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>{props.modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.modalBody}</Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={props.handleCloseModal}>
                    {props.modalCancel}
                </Button>
                <Button variant="success" onClick={props.handleSuccessModal}>
                    {props.modalOk}
                </Button>
                </Modal.Footer>
            </Modal>
        }

        <button className={props.classNameBtn} onClick={props.click}>{props.btnText}
            {
                props.isLoading && props.isLoading === true && <div class="spinner-border text-secondary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
            }
        </button>
    </div>)
}