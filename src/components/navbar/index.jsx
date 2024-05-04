import React from 'react';
import sun from '../../assets/images/icons/sun.svg';
import moon from '../../assets/images/icons/moon.svg';
import logo from '../../assets/images/Boronina.svg';
import './style.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav-row'>
                    <NavLink to={'/'} className='logo'>
                        {/* <img src={logo} alt='Boronina' className='logo__img' /> */}
                        <strong>Boronina</strong> portfolio
                    </NavLink>
                    <button className='dark-mode-btn'>
                        <img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
                        <img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
                    </button>
                    <ul className='nav-list'>
                        <li className='nav-list__item'>
                            <NavLink
                                to={'/'}
                                className={({ isActive }) =>
                                    'nav-list__link' + (isActive ? ' nav-list__link--active' : '')
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-list__item'>
                            <NavLink
                                to={'/allProjects'}
                                className={({ isActive }) =>
                                    'nav-list__link' + (isActive ? ' nav-list__link--active' : '')
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className='nav-list__item'>
                            <NavLink
                                to={'/contacts'}
                                className={({ isActive }) =>
                                    'nav-list__link' + (isActive ? ' nav-list__link--active' : '')
                                }
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
