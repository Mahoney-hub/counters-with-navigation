import React from 'react';
import {Button} from './Button';
import s from './CounterV1.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {changeValueAC, resetValueAC} from '../../store/reducers/counterV1';
import {AppStateType} from '../../store/store';

export const CounterButtons = () => {
    const value = useSelector<AppStateType, number>(state => state.counterV1.value)
    const dispatch = useDispatch()
    // Functions
    const handlerClick = () => dispatch(changeValueAC())
    const handlerReset = () => dispatch(resetValueAC())

    return (
        <div className={s.buttons__wrapper}>
            <Button className={s.button} disabled={value >= 5} name={'incr'} callBack={handlerClick}/>
            <Button className={s.button} disabled={value === 0} name={'reset'} callBack={handlerReset}/>
        </div>
    );
};

