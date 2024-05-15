import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const NavBarLink = ({ path, title }) => {
    const simpleLink = 'nav__list_link';
    const activeLink = 'nav__list_link-active';

    return (
        <NavLink to={path} className={({ isActive }) => (isActive ? activeLink : simpleLink)}>
            {title}
        </NavLink>
    );
};

export default NavBarLink;
