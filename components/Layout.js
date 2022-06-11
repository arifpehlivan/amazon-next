import { AppBar, Container, createTheme, CssBaseline, Link, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';
import NextLink from "next/link";

export default function Layout({ title, description, children }) {
    const theme = createTheme({
        typography: {
            h1: {
                fontSize: "1.6rem",
                fontWeight: 400,
                margin: "1rem 0"
            },
            h2: {
                fontSize: "1.4rem",
                fontWeight: 400,
                margin: "1rem 0"
            }
        },
            palette: {
                type: 'light',//darkMode ? 'dark' : 
                primary: {
                    main: '#f0c000',
                },
                secondary: {
                    main: '#208080',
                },
            },
    });
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>{title ? `${title} - Amazon Next` : "Amazon Next"} </title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position='static' className={classes.navbar}>
                    <Toolbar>
                        <NextLink href="/" passHref>
                            <Link>
                                <Typography className={classes.brand}>Amazon</Typography>
                            </Link>
                        </NextLink>
                        <div className={classes.grow}></div>
                        <div>
                            <NextLink href="/cart" passHref>
                                <Link>Cart</Link>
                            </NextLink>
                            <NextLink href="/login" passHref>
                                <Link>Login</Link>
                            </NextLink>
                        </div>
                    </Toolbar>
                </AppBar>
                <Container className={classes.main}>
                    {children}
                </Container>
                <footer className={classes.footer}>
                    <Typography>
                        All rights reserved. Amazon Next.
                    </Typography>
                </footer>
            </ThemeProvider>

        </div>
    )
}
