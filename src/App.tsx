import React from 'react';
import {HeaderNav} from './components/HeaderNav/HeaderNav';
import {Routing} from './nav/Routing';
import {HashRouter} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <HashRouter>
                <HeaderNav/>
                <Routing/>
            </HashRouter>
        </div>
    );
};

export default App;