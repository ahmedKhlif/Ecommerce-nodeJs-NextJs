"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import Image from "next/image";
import ShoppingCart from "./ShoppingCart";
import { useShoppingCart } from "use-shopping-cart";
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function ButtonAppBar() {
    const router = useRouter();
    const { handleCartClick, cartCount } = useShoppingCart();
    const { data } = useSession();
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Amatic SC',
                'Delicious'
            ].join(',')
        },
        palette: {
            primary: {
                main: '#2C3E50', // Update primary color
            },
            secondary: {
                main: '#E74C3C', // Update secondary color
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className="appBarHeight" sx={{ bgcolor: "#2C3E50" }}>
                    <Toolbar>
                        <Typography component="div" sx={{ flexGrow: 1 }}>
                            <Button onClick={() => router.push('/')}>
                                <img src='/images/logo1.png' width={85} className='ms-1' alt="Logo" />
                            </Button>
                        </Typography>

                        <Button sx={{ bgcolor: "#2C3E50", color: "#E74C3C", fontWeight: "500", fontSize: 27 }} onClick={() => router.push('/')}>Home</Button>
                        <Button sx={{ bgcolor: "#2C3E50", color: "#E74C3C", fontWeight: "500", fontSize: 27 }} onClick={() => router.push('/about')}>About</Button>
                        <Button sx={{ bgcolor: "#2C3E50", color: "#E74C3C", fontWeight: "500", fontSize: 27 }} onClick={() => router.push('/products')}>Our Menu</Button>
                        {data?.user ? (
                            <>
                                <span className='user' style={{ margin: "10px", color: "#D6505A", fontWeight: "600" }}>USER: {data?.user?.name}</span>
                                <Button sx={{ bgcolor: "#2C3E50", color: "#E74C3C", fontWeight: "500", fontSize: 27 }} onClick={() => signOut()}>Logout</Button>
                                {data?.user?.name !== "ahmed" ? (
                                    <>
                                        <Button sx={{ bgcolor: "#2C3E50", color: "#E74C3C" }} className="relative btn" onClick={() => handleCartClick()}>
                                            <Image
                                                src="/images/food-package.png"
                                                width={50}
                                                height={50}
                                                alt="shopping cart icon"
                                            />
                                            <div style={{ fontFamily: 'Delicious' }}>{cartCount}</div>
                                        </Button>
                                        <ShoppingCart />
                                    </>
                                ) : null}
                            </>
                        ) : (
                            <div>
                                <Button sx={{ bgcolor: "#2C3E50", color: "#E74C3C", fontWeight: "500", fontSize: 27 }} onClick={() => router.push('/signup')}>Sign Up</Button>
                                <Button sx={{ bgcolor: "#2C3E50", color: "#E74C3C", fontWeight: "500", fontSize: 27 }} onClick={() => router.push('/login')}>Login</Button>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}
