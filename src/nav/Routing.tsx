import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom';
import {CounterV1} from '../components/CounterV1/CounterV1';
import {CounterV2} from '../components/CounterV2/CounterV2';
import {Error404} from '../pages/Error404';

export const PATH = {
    COUNTER_V1: '/counter1',
    COUNTER_V2: '/counter2',
}

export const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.COUNTER_V1}/>}/>
                <Route path={PATH.COUNTER_V1} element={<CounterV1/>}/>
                <Route path={PATH.COUNTER_V2} element={<CounterV2/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

