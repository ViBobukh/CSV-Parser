import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : '#e55f56',
        width                 : '20%',
        textAlign             : 'center',
        borderRadius          : '6px',
        border                : '2px solid red',
        fontFamily            : 'Bahnschrift, sans-serif'
    }
};

Modal.setAppElement('#root')

function ModalWindow({children, isOpen, onClose}){
    let subtitle;

    function afterOpenModal() {
        subtitle.style.color = 'black';
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={onClose}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={_subtitle => (subtitle = _subtitle)}>{children}</h2>
            </Modal>
        </div>
    );
}

export default ModalWindow;