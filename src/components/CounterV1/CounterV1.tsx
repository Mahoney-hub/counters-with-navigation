import React, {useState} from 'react';
import {CounterPanel} from './CounterPanel';
import {CounterButtons} from './CounterButtons';
import s from './CounterV1.module.scss';

export const CounterV1 = () => {
    const [value, setValue] = useState<number>(0)

    const error = (value >= 5)
    const errorButtonReset = (value == 0)

    return (
        <div className={s.counter__wrapper}>
            <div className={s.counter}>
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

