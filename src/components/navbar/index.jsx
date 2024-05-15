import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import NavBarLink from '../UI/NavBarLink';
import infoLink from '../../assets/data/infoLink.json';
import BtnDarkLight from '../UI/BtnDarkLight';

const Navbar = (props) => {
    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav-row'>
                    <NavLink to={'/'} className='logo'>
                        <strong>Boronina</strong> portfolio
                    </NavLink>
                    <BtnDarkLight />
                    <ul className='nav__list'>
                        {infoLink.map((link) => (
                            <li key={link.title} className='nav__list_item'>
                                <NavBarLink path={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
