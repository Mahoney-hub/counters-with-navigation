import React from 'react';
import {Box, Button, ButtonGroup, Paper, Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import {setCountValueAC} from '../../store/reducers/counterV2';

type CounterPropsType = {
    error: boolean
    textOutput: boolean
}

export const Counter = (props: CounterPropsType) => {
    const {error,textOutput} = props

    const count = useSelector<AppStateType, number>(state => state.counterV2.count)
    const startValue = useSelector<AppStateType, number>(state => state.counterV2.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counterV2.maxValue)
    const dispatch = useDispatch()
    // Functions
    const increaseValue = () => {
        if (count !== maxValue) dispatch(setCountValueAC(count + 1))
    }
    const resetValue = () => {
        if (count !== startValue) dispatch(setCountValueAC(startValue))
    }
    // Components before rendering
    const message = error
        ? <Typography color={'red'} variant={'subtitle1'}>Incorrect value!</Typography>
        : <Typography variant={'subtitle1'}>enter values and press 'set'</Typography>
    const componentMessage = textOutput
        ? message
        : <Typography color={(count === maxValue) ? 'error' : 'black'} variant={'h1'}>{count}</Typography>
    // Variables to check
    const requirementsIncrBtn = count === maxValue || componentMessage == message
    const requirementsResetBtn = count === startValue || componentMessage == message
    return (
        <Paper elevation={24} className={'block'}>
            <Box className={'counter'}>
                {componentMessage}
            </Box>
            <ButtonGroup color={'primary'} variant="contained" size="large" fullWidth>
                <Button onClick={increaseValue} disabled={requirementsIncrBtn}>increase</Button>
                <Button onClick={resetValue} disabled={requirementsResetBtn}>reset</Button>
            </ButtonGroup>
        </Paper>
    );
};

