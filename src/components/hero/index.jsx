import React from 'react';
import './style.css';
import resume from '../../assets/images/resume.pdf';

const Hero = (props) => {
    return (
        <header className='hero'>
            <div className='hero__wrapper'>
                <h1 className='hero__title'>
                    <strong>
                        Hi, my name is <em>Karina</em>
                    </strong>
                    <br />a frontend developer
                </h1>
                <div className='hero__text'>
                    <p>with passion for learning and creating.</p>
                </div>
                <a href={resume} download={'resume.pdf'} className='btn' target='_blank' rel='noreferrer'>
                    Download CV
                </a>
            </div>
        </header>
    );
};

export default Hero;
