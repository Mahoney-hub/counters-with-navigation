import React from 'react';
import {HeaderNav} from './components/HeaderNav/HeaderNav';
import './App.scss';
import {Routing} from './nav/Routing';
import {HashRouter} from 'react-router-dom';

const App = () => {
    return (
        <div className={'App'}>
            <HashRouter>
                <HeaderNav/>
                <Routing/>
            </HashRouter>
        </div>
    );
};

export default App;