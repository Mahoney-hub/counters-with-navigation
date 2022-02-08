import React from 'react';
import {Button} from './Button';
import s from './CounterV1.module.scss';

interface ICounterButtonsType {
    value: number
    error: boolean
    errorButtonReset: boolean
    setValue: (value: number) => void
}

export const CounterButtons = ({value, error, setValue, errorButtonReset}: ICounterButtonsType) => {

    const handlerClick = () => setValue(value + 1)
    const handlerReset = () => setValue(0)

    return (
        <div className={s.buttons__wrapper}>
            <Button className={s.button} disabled={error} name={'incr'} callBack={handlerClick}/>
            <Button className={s.button} disabled={errorButtonReset} name={'reset'} callBack={handlerReset}/>
        </div>
    );
};

