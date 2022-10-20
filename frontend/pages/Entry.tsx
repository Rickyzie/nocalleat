import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button, ThemeProvider } from '@mui/material';
import { DefaultTheme } from '../theme/themeOptions';
import Link from 'next/link';
import { RoutePaths } from "../components/route/@type/routes.d"

const theme = DefaultTheme;

    export default function StickyFooter() {
    return (
        <ThemeProvider theme={theme}>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: 30
            }}
            >
            <CssBaseline />
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                歡迎
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                {'即時、快速、方便的線上下單。'}
                {'無須打電話，無須再等待，立刻享受簡易即訂即拿功能。'}
                </Typography>
                <Typography variant="body1">From nolcalleat.</Typography>  
            </Container>
            </Box>
            <Container component="main" sx={{ mt: 1, mb: 2 }} maxWidth="sm">
                <Link href={RoutePaths.LOGIN}>
                    <Box component="span" >
                        <Button variant="contained" size="large">登入</Button>
                    </Box>
                </Link>
                <Link href={RoutePaths.SIGNUP}>
                    <Box component="span"sx={{ ml: 2 }}>
                        <Button variant="contained" size="large">註冊</Button>
                    </Box>
                </Link>
            </Container> 
        </ThemeProvider>
    );
    }