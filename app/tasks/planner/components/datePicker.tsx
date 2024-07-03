'use client';
import * as React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
};

export default function DatePicker() {
    const [value, onChange] = useState(new Date());

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let subtitle: { style: { color: string } };

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <div>CALENDAR HERE!</div>
        </Modal>
    );
}
