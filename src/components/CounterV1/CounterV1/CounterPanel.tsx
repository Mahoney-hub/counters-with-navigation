import React from 'react';

interface ICounterPanelType {
    value: number
    error: boolean
}

export const CounterPanel = ({value, error}: ICounterPanelType) => {
    return (
        <div className={(error) ? 'panel__wrapper--error' : 'panel__wrapper'}>
            <div>{value}</div>
        </div>
    );
};

