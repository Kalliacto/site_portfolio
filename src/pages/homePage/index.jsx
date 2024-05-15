import React, { useEffect, useRef } from 'react';
import Hero from '../../components/hero/index';
import './style.css';
import avatar from '../../assets/images/avatar.jpg';
import { toggleClass } from '../../utils/ulils';

const HomePage = (props) => {
    const dataCollection = useRef();

    useEffect(() => {
        if (!!dataCollection.current.children.length) {
            const intervalID = toggleClass(dataCollection.current.children);
            return () => clearInterval(intervalID);
        }
    }, [dataCollection.current]);

    // TODO: Доделать анимацию

    return (
        <>
            <Hero />
            <main className='section'>
                <div className='container'>
                    <ul className='content__list content__list-home'>
                        <li className='content__list_item'>
                            <img src={avatar} alt='avatar' className='content__list_item-img' />
                        </li>
                        <li className='content__list_item'>
                            <h2 className='title-2'>About me</h2>
                            <p id='skills__list' ref={dataCollection}>
                                <span>JavaScript</span>, <span>React JS</span>,<span> React Router</span>,{' '}
                                <span>Redux</span>, <span>HTML</span>, <span>CSS</span>, <span>SASS</span>,{' '}
                                <span>BootStrap</span>,<span> MaterialUI</span>,<span> TailwindCSS</span>,{' '}
                                <span>NPM</span>,<span> Yarn</span>,<span> GitHub Pages</span>,<span> Figma</span>,{' '}
                                <span>VueJs</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default HomePage;
