import React from 'react';
import {Box, Button, ButtonGroup, Paper, Typography} from '@mui/material';

type CounterPropsType = {
    count: number
    maxValue: number
    startValue: number
    error: boolean
    textOutput: boolean
    setCount: (value: number) => void
}

export const Counter = (props: CounterPropsType) => {
    const {count, maxValue, startValue, error, setCount, textOutput} = props
    // Functions
    const increaseValue = () => {
        if (count !== maxValue) setCount(count + 1)
    }
    const resetValue = () => {
        if (count !== startValue) setCount(startValue)
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

