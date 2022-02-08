import React from 'react';
import s from './CounterV1.module.scss';

interface ICounterPanelType {
    value: number
    error: boolean
}

export const CounterPanel = ({value, error}: ICounterPanelType) => {
    return (
        <div className={(error) ? s.panel__wrapperError : s.panel__wrapper}>
            <div>{value}</div>
        </div>
    );
};

