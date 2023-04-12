import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {AirplaneTicket} from "@mui/icons-material";
import {Link} from "@mui/material";

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <AirplaneTicket
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <AirplaneTicket />
                    </AirplaneTicket>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/" color='inherit'>
                        Passport Application and Payment Service PAPS
                        </Link>
                    </Typography>
                    <Button color="inherit">STATUS</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}