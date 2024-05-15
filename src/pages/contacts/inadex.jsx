import React from 'react';
import './style.css';

const Contacts = (props) => {
    return (
        <main className='section'>
            <div className='container'>
                <h1 className='title-1'>Contacts</h1>
                <ul className='content__list'>
                    <li className='content__list_item'>
                        <h2 className='title-2'>Location</h2>
                        <p>Moscow, Russia</p>
                    </li>
                    <li className='content__list_item'>
                        <h2 className='title-2'>Telegram / WhatsApp</h2>
                        <p>
                            <a href='tel:+77777777'>Подумаю написать ли</a>
                        </p>
                    </li>
                    <li className='content__list_item'>
                        <h2 className='title-2'>Email</h2>
                        <p>
                            <a href='mailto:gubashina@yandex.ru'>Gubashina@yandex.ru</a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Contacts;
