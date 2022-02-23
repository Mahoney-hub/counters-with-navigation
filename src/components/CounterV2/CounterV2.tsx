import React, {useState} from 'react';
import {Box, ThemeProvider} from '@mui/material';
import {SettingCounter} from './SettingCounter';
import {Counter} from './Counter';
import {theme} from './style';
import './CounterV2.scss';

export const CounterV2 = () => {
    const [error, setError] = useState<boolean>(false) // Наличие ошибки
    const [textOutput, setTextOutput] = useState<boolean>(false) // Разврешить вывод текстового поля

    return (
        <ThemeProvider theme={theme}>
            <Box className={'container'}>
                <SettingCounter
                    error={error}
                    setError={setError}
                    setTextOutput={setTextOutput}
                />
                <Counter
                    error={error}
                    textOutput={textOutput}
                />
            </Box>
        </ThemeProvider>
    );
};
