import React from 'react';
import './style.css';
import projectsMiniImg from '../../assets/images/projects';

const PreviewCard = ({ card }) => {
    return (
        <article className='project__wrap'>
            <a href='./project-page.html' className='project__card'>
                <img src={projectsMiniImg[card.miniImg]} alt={card.title} className='project__img' />
                <h3 className='project__title'>{card.title}</h3>
            </a>
        </article>
    );
};

// Сделать стили для картинки

export default PreviewCard;
