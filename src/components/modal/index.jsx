import React, { useEffect } from 'react';
import './style.css';

const Modal = ({ isVisible = false, content, setModal, handlerPrevPhoto, handlerNextPhoto, prevPhoto, nextPhoto }) => {
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
            {!!prevPhoto && <span className='modal__arrow modal__arrow-left' onClick={handlerPrevPhoto}></span>}
            <div className='modal__dialog'>
                {/* gghhh */}
                <img src={content} alt='картинка' className='modal__content' onClick={onClose} />
            </div>
            {!!nextPhoto && <span className='modal__arrow modal__arrow-right' onClick={handlerNextPhoto}></span>}
        </div>
    );
};

export default Modal;
