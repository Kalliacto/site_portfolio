import React from 'react';
import './style.css';

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
                <a href='#!' className='btn'>
                    Download CV
                </a>
            </div>
        </header>
    );
};

export default Hero;
