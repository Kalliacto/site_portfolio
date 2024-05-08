import React, { useEffect } from 'react';
import sun from '../../assets/images/icons/sun.svg';
import moon from '../../assets/images/icons/moon.svg';
import './style.css';
import detectMode from '../../utils/detectMode';
import { useLocalStorage } from '../../utils/useLocalStorage';

const BtnDarkLight = (props) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectMode());
    const btnLight = 'dark-mode-btn';
    const btnDark = 'dark-mode-btn dark-mode-btn--active';

    const toggleMode = () => {
        setDarkMode((state) => (state === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
            const newColorScheme = event.matches ? 'dark' : 'light';
            setDarkMode(newColorScheme);
        });
    }, []);

    return (
        <button className={darkMode === 'dark' ? btnDark : btnLight} onClick={toggleMode}>
            <img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
            <img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
        </button>
    );
};

export default BtnDarkLight;
