import React, {useState} from 'react';
import {CounterPanel} from './Counter/CounterPanel';
import {CounterButtons} from './Counter/CounterButtons';
import '../styles/CounterV1.css';

export const CounterV1 = () => {
    const [value, setValue] = useState<number>(0)

    const error = (value >= 5) ? true : false
    const errorButtonReset = (value == 0) ? true : false

    return (
        <div className={'counter__wrapper'}>
            <div className={'counter'}>
                <CounterPanel value={value} error={error}/>
                <CounterButtons
                    value={value}
                    setValue={setValue}
                    error={error}
                    errorButtonReset={errorButtonReset}
                />
            </div>
        </div>
    );
};

