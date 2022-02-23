import React from 'react';
import s from './CounterV1.module.scss';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';

export const CounterPanel = () => {
    const value = useSelector<AppStateType, number>(state => state.counterV1.value)

    return (
        <div className={(value >= 5) ? s.panel__wrapperError : s.panel__wrapper}>
            <div>{value}</div>
        </div>
    );
};

