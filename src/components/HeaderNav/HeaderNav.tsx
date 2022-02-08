import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../../styles/styleNav';
import {ThemeProvider} from '@mui/material';
import {darkTheme} from '../../styles/styleNav';
import {NavTabs} from './NavTabs';

export const HeaderNav = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <AppBar>
                    <NavTabs/>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}

