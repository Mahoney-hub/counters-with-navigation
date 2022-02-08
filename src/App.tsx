import React from 'react';
import {HeaderNav} from './HeaderNav/HeaderNav';
import './styles/App.css';
import {CounterV1} from './Counter-v1/CounterV1';

const App = () => {
    return (
        <div className={'App'}>
            <HeaderNav/>
            <CounterV1/>
        </div>
    );
};

export default App;