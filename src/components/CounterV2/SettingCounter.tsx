import React, {ChangeEvent, useEffect, useState} from 'react';
import {Box, Button, ButtonGroup, Paper, TextField, Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import {setCountValueAC, setMaxValueAC, setStartValueAC} from '../../store/reducers/counterV2';

type SettingCounterPropsType = {
    error: boolean
    setError: (error: boolean) => void
    setTextOutput: (value: boolean) => void
}

export const SettingCounter = (props: SettingCounterPropsType) => {
    const {error, setError, setTextOutput} = props
    const [hideButton, setHideButton] = useState<boolean>(false)
    const startValue = useSelector<AppStateType, number>(state => state.counterV2.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counterV2.maxValue)
    const dispatch = useDispatch()

    // Functions
    const handlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const requirements = +(e.currentTarget.value) <= startValue || startValue < 0
        setError(requirements)
        dispatch(setMaxValueAC(+(e.currentTarget.value)))
        setTextOutput(true)
        setHideButton(requirements)
    }
    const handlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const requirements = +(e.currentTarget.value) >= maxValue || +(e.currentTarget.value) < 0
        setError(requirements)
        dispatch(setStartValueAC(+(e.currentTarget.value)))
        setTextOutput(true)
        setHideButton(requirements)
    }
    const handlerClick = () => {
        // getSettings(maxValue, startValue)
        dispatch(setCountValueAC(startValue))
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
                <Typography variant={'h6'}>start value:</Typography>
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

