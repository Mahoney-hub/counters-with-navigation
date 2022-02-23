import React from 'react';
import {CounterPanel} from './CounterPanel';
import {CounterButtons} from './CounterButtons';
import s from './CounterV1.module.scss';

export const CounterV1 = () => {

    return (
        <div className={s.counter__wrapper}>
            <div className={s.counter}>
                <CounterPanel/>
                <CounterButtons/>
            </div>
        </div>
    );
};

