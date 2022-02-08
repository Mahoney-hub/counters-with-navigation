import React from 'react';
import {Button} from './Button';

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
        <div className={'buttons__wrapper'}>
            <Button className={'button'} disabled={error} name={'incr'} callBack={handlerClick}/>
            <Button className={'button'} disabled={errorButtonReset} name={'reset'} callBack={handlerReset}/>
        </div>
    );
};

