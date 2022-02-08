import {createTheme} from '@mui/material/styles';
import {amber, deepOrange} from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: amber[500],
        },
        error: {
            main: deepOrange['A400']
        }
    },
});