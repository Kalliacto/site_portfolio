import React, { useState } from 'react';
import './style.css';
import projectsImg from '../../assets/images/projects';

const Slider = ({ photos }) => {
    const [indexActivePhoto, setIndexActivePhoto] = useState(0);
    let activePhoto = photos[indexActivePhoto];
    let prevPhoto = photos[activePhoto - 1];
    let nextPhoto = photos[activePhoto + 1];

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

    return (
        <div className='slider__container'>
            <ul className='slider__list'>
                <li className='slider__item'>
                    <img className='slider__img' src={projectsImg[activePhoto]} alt='стрижка модельная' />
                </li>
            </ul>
            <button
                className='slider__arrow slider__arrow_left'
                aria-label='Предыдущий слайд'
                onClick={handlerPrevPhoto}
            ></button>
            <button
                className='slider__arrow slider__arrow_right'
                aria-label='Следующий слайд'
                onClick={handlerNextPhoto}
            ></button>
        </div>
    );
};

export default Slider;
