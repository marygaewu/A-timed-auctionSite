import React, { useContext, useState } from "react";
import * as Backend from "../../build/index.main.mjs";
import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import { Context } from "../../Context";

export const DeployButton = ({ ctcArgs }) => {
    const [account, , , , , setCtcInfo, , setCtc, , setCtcArgs] = useContext(Context);
    const [show, setShow] = useState(false);
    const history = useHistory();

    const deploy = async () => {
        // Open a window showing it's loaded
        setShow(true);

        console.log({ account, Backend });
        const ctc = account.deploy(Backend);
        console.log(ctc);
        // Contract to identify the participant on the application page.
        setCtc([ctc]);

        // Here we give the values ​​we will give when loading the contract
        setCtcArgs(ctcArgs);

        // Convert the contract information to String and copy it in the future.
        const ctcInfo = JSON.stringify(await ctc.getInfo(), null, 2);
        setCtcInfo([ctcInfo]);

        // Go to the contract download page
        history.push('/deploy');
    }

    return (
        <div>
            <Button variant="primary" onClick={deploy}>Deploy</Button>
            <DeployModal show={show} />
        </div>
    );
}

export const AttachButton = () => {
    const [account, , , , , , , setCtc] = useContext(Context);
    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const attach = async (ctcInfo) => {
        // Connect to the given contract
        const ctc = await account.attach(Backend, JSON.parse(ctcInfo));

        // contract to identify the participant on the application page.
        // More context
        setCtc([ctc]);

        console.log("Attached to the contract");
        // Switch to application page
        history.push("/app/buyer");
    }

    return (
        <div>
            <Button onClick={handleShow}>Attach</Button>
            <AttachModal
                show={show}
                handleClose={handleClose}
                attach={attach} />
        </div>
    );
}

const AttachModal = ({ show, handleClose, attach }) => {
    const handleAttach = () => {
        // Get contract information
        const info = document.querySelector("#ctcArea").value;
        attach(info);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Join Auction</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    id="ctcArea"
                    as="textarea"
                    rows="10"
                    placeholder="Paste auction info here" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAttach}>
                    Attach
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const DeployModal = ({ show }) => {
    return (
        <Modal show={show} centered className="text-center">
            <Modal.Body>
                <h2>Deploying the contract</h2>
                <Spinner animation="border" />
            </Modal.Body>
        </Modal>
    );
}
