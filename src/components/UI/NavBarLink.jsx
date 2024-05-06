import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const NavBarLink = ({ path, title }) => {
    return (
        <NavLink to={path} className={({ isActive }) => 'nav-list__link' + (isActive ? ' nav-list__link--active' : '')}>
            {title}
        </NavLink>
    );
};

export default NavBarLink;
