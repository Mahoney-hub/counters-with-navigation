import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface LinkTabProps {
    label?: string;
    href?: string;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export function NavTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '10px'}}>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                <LinkTab label="COUNTER-V1" href="/counter1" />
                <LinkTab label="COUNTER-V2" href="/counter2" />
            </Tabs>
        </Box>
    );
}