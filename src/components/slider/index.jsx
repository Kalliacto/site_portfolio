import React, { useState } from 'react';
import './style.css';
import projectsImg from '../../assets/images/projects';
import { ReactComponent as Zoom } from '../../assets/images/icons/zoom.svg?react';
import Modal from '../modal';

const Slider = ({ photos }) => {
    const [indexActivePhoto, setIndexActivePhoto] = useState(1);
    const [isModal, setModal] = useState(false);
    let activePhoto = photos[indexActivePhoto];
    let prevPhoto = photos[indexActivePhoto - 1];
    let nextPhoto = photos[indexActivePhoto + 1];

    //TODO: Сделать функцию определения какая тема и от этого сделать зависимость цвета лупы?
    //TODO: Определять на какой я странице и на странице NTF или Inspired сделать всегда лупу противоположного цвета

    const handlerPrevPhoto = () => {
        if (indexActivePhoto !== 0) {
            setIndexActivePhoto(indexActivePhoto - 1);
        }
    };

    const handlerNextPhoto = () => {
        if (indexActivePhoto !== photos.length - 1) {
            setIndexActivePhoto(indexActivePhoto + 1);
        }
    };

    // TODO: Сделать слайдер внутри модалки?

    return (
        <div className='slider__container'>
            <ul className='slider__list'>
                {!!prevPhoto ? (
                    <li className='slider__item left_slide'>
                        <img className='slider__img' src={projectsImg[prevPhoto]} alt='стрижка модельная' />
                    </li>
                ) : (
                    <li className='slider__item'></li>
                )}
                <li className='slider__item slider__item_active'>
                    <img className='slider__img' src={projectsImg[activePhoto]} alt='стрижка модельная' />
                    <div className='main__photo_zoom'>
                        <Zoom onClick={() => setModal(true)} />
                    </div>
                </li>
                {!!nextPhoto && (
                    <li className='slider__item right_slide'>
                        <img className='slider__img' src={projectsImg[nextPhoto]} alt='стрижка модельная' />
                    </li>
                )}
            </ul>
            {indexActivePhoto !== 0 ? (
                <button
                    className='slider__arrow slider__arrow_left'
                    aria-label='Предыдущий слайд'
                    onClick={handlerPrevPhoto}
                ></button>
            ) : (
                ''
            )}
            {indexActivePhoto !== photos.length - 1 ? (
                <button
                    className='slider__arrow slider__arrow_right'
                    aria-label='Следующий слайд'
                    onClick={handlerNextPhoto}
                ></button>
            ) : (
                ''
            )}
            <Modal isVisible={isModal} setModal={setModal} content={projectsImg[activePhoto]} />
        </div>
    );
};

export default Slider;
