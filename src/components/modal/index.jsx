import React, { useEffect, useState } from 'react';
import './style.css';

const Modal = ({ isVisible = false, content, setModal, handlerPrevPhoto, handlerNextPhoto, prevPhoto, nextPhoto }) => {
    const [active, setActive] = useState(false);

    const onClose = () => {
        setModal(false);
        setActive(false);
    };

    const keydownHandler = (e) => {
        switch (e.key) {
            case 'Escape':
                onClose();
                break;
            case 'ArrowRight':
                handlerNextPhoto(e);
                break;
            case 'ArrowLeft':
                handlerPrevPhoto(e);
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

    const toggleZoom = (e) => {
        e.stopPropagation();
        setActive((state) => !state);
    };

    return !isVisible ? null : (
        <div className='modal' onClick={onClose}>
            {!!prevPhoto && <span className='modal__arrow modal__arrow-left' onClick={handlerPrevPhoto}></span>}
            <div
                className={active ? 'modal__dialog modal__dialog-active' : 'modal__dialog'}
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={content}
                    alt='картинка'
                    className={active ? 'modal__content-active' : 'modal__content'}
                    onDoubleClick={(e) => toggleZoom(e)}
                />
            </div>
            {!!nextPhoto && <span className='modal__arrow modal__arrow-right' onClick={handlerNextPhoto}></span>}
        </div>
    );
};

export default Modal;

// TODO: Сделать передистывание по свайпу для мобил
