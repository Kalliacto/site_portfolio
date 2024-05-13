import React from 'react';
import Header from '../../components/header/inedex';
import './style.css';

const HomePage = (props) => {
    return (
        <>
            <Header />
            <main className='section'>
                <div className='container'>
                    <ul className='content-list'>
                        <li className='content-list__item'>
                            <h2 className='title-2'>Frontend</h2>
                            {/* TODO: сделать анимацию смены цвета пунктов списка */}
                            <p>
                                JavaScript, ReactJS, React Router, Redux, HTML, CSS, SASS, BootStrap, MaterialUI,
                                TailwindCSS, NPM, Yarn, GitHub Pages, Figma, VueJs,
                            </p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default HomePage;
