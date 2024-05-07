import React from 'react';
import './style.css';
import projectsMiniImg from '../../assets/images/projects';
import { Link } from 'react-router-dom';

const PreviewCard = ({ card }) => {
    return (
        // <article className='project__wrap'>
        <Link to={`/project/${card.id}`} className='project__card'>
            <img src={projectsMiniImg[card.miniImg]} alt={card.title} className='project__img' />
            <h3 className='project__title'>{card.title}</h3>
        </Link>
        // </article>
    );
};

// Сделать стили для картинки

export default PreviewCard;
