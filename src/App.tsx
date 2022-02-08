import React from 'react';
import {HeaderNav} from './components/HeaderNav/HeaderNav';
import './styles/App.scss';
import {CounterV1} from './components/CounterV1/CounterV1';
import {CounterV2} from './components/CounterV2/CounterV2';

const App = () => {
    return (
        <div className={'App'}>
            <HeaderNav/>
            {/*<CounterV1/>*/}
            <CounterV2/>
        </div>
    );
};

export default App;