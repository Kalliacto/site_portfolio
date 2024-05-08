import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const NavBarLink = ({ path, title }) => {
    const simpleLink = 'nav-list__link';
    const activeLink = 'nav-list__link--active';

    return (
        <NavLink to={path} className={({ isActive }) => (isActive ? activeLink : simpleLink)}>
            {title}
        </NavLink>
    );
};

export default NavBarLink;
