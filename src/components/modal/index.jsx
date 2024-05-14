import React, { useEffect } from 'react';
import './style.css';

const Modal = ({ isVisible = false, content, setModal }) => {
    const onClose = () => {
        setModal(false);
    };

    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    useEffect(() => {
        document.body.style.overflow = isVisible ? 'hidden' : 'unset';
    }, [isVisible]);

    return !isVisible ? null : (
        <div className='modal' onClick={onClose}>
            <div className='modal__dialog' onClick={(e) => e.stopPropagation()}>
                <span className='modal__close' onClick={onClose}>
                    &times;
                </span>
                <img src={content} alt='картинка' className='modal__content' />
            </div>
        </div>
    );
};

export default Modal;
