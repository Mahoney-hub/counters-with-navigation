import React, {useEffect, useState} from 'react';
import {Box, ThemeProvider} from '@mui/material';
import {SettingCounter} from './SettingCounter';
import {Counter} from './Counter';
import {theme} from './style';
import './CounterV2.scss';

export const CounterV2 = () => {
    // BLL
    const [count, setCount] = useState<number>(0) // Счетчик
    const [maxValue, setMaxValue] = useState<number>(0) // Максимальное значение
    const [startValue, setStartValue] = useState<number>(0) // Начальное значение
    const [error, setError] = useState<boolean>(false) // Наличие ошибки
    const [textOutput, setTextOutput] = useState<boolean>(false) // Разврешить вывод текстового поля

    useEffect(() => {
        let stringCounter = localStorage.getItem('counterValue')
        let stringMaxValue = localStorage.getItem('maxValue')
        let stringStartValue = localStorage.getItem('startValue')
        if (stringCounter) setCount(JSON.parse(stringCounter))
        if (stringMaxValue) setMaxValue(JSON.parse(stringMaxValue))
        if (stringStartValue) setStartValue(JSON.parse(stringStartValue))
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [count, maxValue, startValue])
    // Functions
    const getSettings = (maxValue: number, startValue: number) => {
        setMaxValue(maxValue)
        setStartValue(startValue)
        setCount(startValue)
    }
    return (
        <ThemeProvider theme={theme}>
            <Box className={'container'}>
                <SettingCounter
                    error={error}
                    maxValue={maxValue}
                    startValue={startValue}
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    setError={setError}
                    getSettings={getSettings}
                    setTextOutput={setTextOutput}
                />
                <Counter
                    count={count}
                    maxValue={maxValue}
                    startValue={startValue}
                    error={error}
                    setCount={setCount}
                    textOutput={textOutput}
                />
            </Box>
        </ThemeProvider>
    );
};
