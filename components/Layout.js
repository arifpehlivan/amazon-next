import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/Head';
import React from 'react'

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Amazon Next</title>
            </Head>
            <AppBar position='static'>
                <Toolbar>
                    <Typography>Amazon</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>
                    All rights reserved. Amazon Next.
                </Typography>
            </footer>
        </div>
    )
}
