
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import NextLink from 'next/link';

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
                <Link href='/' display='flex' alignItems='center'>
                    <Typography variant='h6'>My |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>  

            <Box flex={ 1 } />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink passHref href='/category/men' >
                        <Button>Hombres</Button>
                    </NextLink>
                    <NextLink passHref href='/category/women'>
                        <Button>Mujeres</Button>
                    </NextLink>
                    <NextLink passHref href='/category/kid'>
                        <Button>Niños</Button>
                    </NextLink>
            </Box>


            <Box flex={ 1 } />

            <IconButton>
                <SearchOutlined />
            </IconButton>

                <NextLink passHref href="/cart">
                    <IconButton>
                        <Badge badgeContent={ 2 } color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </NextLink>


            <Button>
                Menú
            </Button>

        </Toolbar>
    </AppBar>
  )
}