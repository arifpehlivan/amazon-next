import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';

export default function Layout({children}) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>Amazon Next</title>
            </Head>
            <AppBar position='static' className={classes.navbar}>
                <Toolbar>
                    <Typography>Amazon</Typography>
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
        </div>
    )
}
