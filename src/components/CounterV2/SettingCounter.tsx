import React, {ChangeEvent, useEffect, useState} from 'react';
import {Box, Button, ButtonGroup, Paper, TextField, Typography} from '@mui/material';

type SettingCounterPropsType = {
    error: boolean
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setError: (error: boolean) => void
    getSettings: (maxValue: number, startValue: number) => void
    setTextOutput: (value: boolean) => void
}

export const SettingCounter = (props: SettingCounterPropsType) => {
    const {error, maxValue, startValue, setMaxValue, setStartValue, setError, getSettings, setTextOutput} = props
    const [hideButton, setHideButton] = useState<boolean>(false)
    // Functions
    const handlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const requirements = +(e.currentTarget.value) <= startValue || startValue < 0
        setError(requirements)
        setMaxValue(+(e.currentTarget.value))
        setTextOutput(true)
        setHideButton(requirements)
    }
    const handlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const requirements = +(e.currentTarget.value) >= maxValue || +(e.currentTarget.value) < 0
        setError(requirements)
        setStartValue(+(e.currentTarget.value))
        setTextOutput(true)
        setHideButton(requirements)
    }
    const handlerClick = () => {
        getSettings(maxValue, startValue)
        setTextOutput(false)
        setHideButton(true)
    }
    return (
        <Paper elevation={24} className={'block'}>
            <Box m={2} className={'row'}>
                <Typography variant={'h6'}>max value:</Typography>
                <TextField
                    label="Number"
                    type="number"
                    size={'small'}
                    color={(error) ? 'error' : 'primary'}
                    focused
                    value={maxValue}
                    onChange={handlerMaxValue}
                />
            </Box>
            <Box m={2} className={'row'}>
                <Typography variant={'h6'}>set value:</Typography>
                <TextField
                    label="Number"
                    type="number"
                    size={'small'}
                    color={(error) ? 'error' : 'primary'}
                    focused
                    value={startValue}
                    onChange={handlerStartValue}
                />
            </Box>
            <ButtonGroup color={'primary'} variant="contained" size="large" fullWidth>
                <Button onClick={handlerClick} disabled={hideButton}>set</Button>
            </ButtonGroup>
        </Paper>
    );
};

