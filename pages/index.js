import Header from '../components/Header';
import Home from '../components/Home';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import React from 'react';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: green,
    },
});

const Index = () => (
    <ThemeProvider theme={theme}>
        <Header />
        <Home />
    </ThemeProvider>
);

export default Index;
