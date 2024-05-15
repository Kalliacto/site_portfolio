import React, { useState } from 'react';
import './style.css';
import projectsImg from '../../assets/images/projects';
import Modal from '../modal';

const Slider = ({ photos }) => {
    const [indexActivePhoto, setIndexActivePhoto] = useState(1);
    const [isModal, setModal] = useState(false);
    let activePhoto = photos[indexActivePhoto];
    let prevPhoto = photos[indexActivePhoto - 1];
    let nextPhoto = photos[indexActivePhoto + 1];

    const handlerPrevPhoto = (e) => {
        e.stopPropagation();
        if (indexActivePhoto !== 0) {
            setIndexActivePhoto(indexActivePhoto - 1);
        }
    };

    const handlerNextPhoto = (e) => {
        e.stopPropagation();
        if (indexActivePhoto !== photos.length - 1) {
            setIndexActivePhoto(indexActivePhoto + 1);
        }
    };

    return (
        <div className='slider__container'>
            <ul className='slider__list'>
                {!!prevPhoto ? (
                    <li className='slider__item left_slide'>
                        <img className='slider__img' src={projectsImg[prevPhoto]} alt='стрижка модельная' />
                    </li>
                ) : (
                    <li className='slider__item visibility'></li>
                )}
                <li className='slider__item slider__item_active'>
                    <img
                        className='slider__img'
                        src={projectsImg[activePhoto]}
                        alt='стрижка модельная'
                        onClick={() => setModal(true)}
                    />
                </li>
                {!!nextPhoto ? (
                    <li className='slider__item right_slide'>
                        <img className='slider__img' src={projectsImg[nextPhoto]} alt='стрижка модельная' />
                    </li>
                ) : (
                    <li className='slider__item visibility'></li>
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
            <Modal
                isVisible={isModal}
                setModal={setModal}
                content={projectsImg[activePhoto]}
                handlerPrevPhoto={handlerPrevPhoto}
                handlerNextPhoto={handlerNextPhoto}
                prevPhoto={prevPhoto}
                nextPhoto={nextPhoto}
            />
        </div>
    );
};

// TODO: Словить ошибку на мобилке, что пропадает скролл
// TODO: Возможно надо добавить задержку перед появлением картинки чтобы успела появиться нужная

export default Slider;
