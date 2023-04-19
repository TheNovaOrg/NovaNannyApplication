import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

function Popup({ openPopUp,deleteEntry }) {
    console.log(openPopUp, "PopUp Component");

    useEffect(() => {
        if (openPopUp) openModal();
        else closeModal();
    }, [openPopUp]);

    const [modalIsOpen, setIsOpen] = useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        console.log("After open Modal");
    }

    function handleDelete() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
        console.log("delete");
        deleteEntry();
        closeModal();
    }

    function closeModal() {
        setIsOpen(false);
        // openPopUp = false;
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
        >
            <div className="bg-white p-4 rounded shadow-lg z-50">

                <p className="mb-4">Are you sure you want to delete this item?</p>

                <div className="flex justify-end">
                    <button
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-4"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={handleDelete}
                    >
                        Yes, Delete Item
                    </button>
                </div>
            </div>
        </Modal >
    )
}

export default Popup;