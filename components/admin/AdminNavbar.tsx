
import { AppBar,  Box, Button, Link, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import {  UiContext } from '../../context';

export const AdminNavbar = () => {

    const { toggleSideMenu } = useContext(UiContext);

    return (
        <AppBar>
            <Toolbar>
                <Link href='/' display='flex' alignItems='center'>
                    <Typography variant='h6'>My |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>

                <Box flex={1} />

    


                <Button onClick={toggleSideMenu}>
                    Menú
                </Button>


            </Toolbar>
        </AppBar>
    )
}