import React from 'react';
import vk from '../../assets/images/icons/vk.svg';
import instagram from '../../assets/images/icons/instagram.svg';
import twitter from '../../assets/images/icons/twitter.svg';
import gitHub from '../../assets/images/icons/gitHub.svg';
import './style.css';

const Footer = (props) => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <ul className='social'>
                        <li className='social__item'>
                            <a href='https://vk.com/id193743900' target='_blank' rel='noreferrer'>
                                <img src={vk} alt='Link' />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a href='#!'>
                                <img src={instagram} alt='Link' />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a href='#!'>
                                <img src={twitter} alt='Link' />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a href='https://github.com/Kalliacto' target='_blank' rel='noreferrer'>
                                <img src={gitHub} alt='Link' />
                            </a>
                        </li>
                    </ul>
                    <div className='copyright'>Developer:&nbsp;Kalliacto with Love&#129505;</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
