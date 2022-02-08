import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './HeaderNav.module.scss';

type setActiveType = ((props: { isActive: boolean }) => string)

export const HeaderNav = () => {
    const setActive: setActiveType = ({isActive}) => isActive ? s.active : ''

    return (
        <nav className={s.navbar}>
            <NavLink to={'/counter1'} className={setActive}>COUNTER_V1</NavLink>
            <NavLink to={'/counter2'} className={setActive}>COUNTER_V2</NavLink>
        </nav>
    );
};


