
import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from '@mui/material';
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { CartContext, UiContext } from '../../context';

export const Navbar = () => {

    const { asPath, push } = useRouter();
    const { toggleSideMenu } = useContext(UiContext);
    const { numberOfItems } = useContext(CartContext);

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;
        push(`/search/${searchTerm}`);
    }

    return (
        <AppBar>
            <Toolbar>
                <Link href='/' display='flex' alignItems='center'>
                    <Typography variant='h6'>My |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>

                <Box flex={1} />

                <Box sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } }}
                    className="fadeIn">
                    <NextLink passHref href='/category/men' >
                        <Button color={asPath === '/category/men' ? 'primary' : 'info'}>Hombres</Button>
                    </NextLink>
                    <NextLink passHref href='/category/women'>
                        <Button color={asPath === '/category/women' ? 'primary' : 'info'}>Mujeres</Button>
                    </NextLink>
                    <NextLink passHref href='/category/kid'>
                        <Button color={asPath === '/category/kid' ? 'primary' : 'info'}>Niños</Button>
                    </NextLink>
                </Box>


                <Box flex={1} />

                {/* Pantallas pantallas grandes */}
                {
                    isSearchVisible
                        ? (
                            <Input
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                                className='fadeIn'
                                autoFocus
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                                type='text'
                                placeholder="Buscar..."
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setIsSearchVisible(false)}
                                        >
                                            <ClearOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        )
                        :
                        (
                            <IconButton
                                onClick={() => setIsSearchVisible(true)}
                                className="fadeIn"
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                            >
                                <SearchOutlined />
                            </IconButton>
                        )
                }


                {/* Pantallas pequeñas */}
                <IconButton
                    sx={{ display: { xs: 'flex', sm: 'none' } }}
                    onClick={toggleSideMenu}
                >
                    <SearchOutlined />
                </IconButton>

                <NextLink passHref href="/cart">
                    <IconButton>
                        <Badge badgeContent={numberOfItems > 9 ? '+9' : numberOfItems} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </NextLink>


                <Button onClick={toggleSideMenu}>
                    Menú
                </Button>


            </Toolbar>
        </AppBar>
    )
}