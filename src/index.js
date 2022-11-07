import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createTheme, MuiThemeProvider} from "@material-ui/core/styles";
import {createStyles, makeStyles} from '@material-ui/core';
import Routers from "./pages/Routers";
import {BrowserRouter} from "react-router-dom";

const useGlobalStyles = makeStyles(() =>
    createStyles({
        '@global': {
            html: {
                '-webkit-font-smoothing': 'antialiased',
                height: '100%',
                width: '100%'
            },
            body: {
                height: '100%',
                width: '100%'
            },
            '#root': {
                height: '100%',
                width: '100%'
            }
        }
    })
);

const theme = createTheme({
    palette: {
        primary: {
            main: '#008CFFFF',
        },
        secondary: {
            main: "#0098FF",
        },
    },
});

const GlobalStyles = () => {
    useGlobalStyles();
    return null;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <MuiThemeProvider theme={theme}>
        <GlobalStyles/>
        <BrowserRouter>
            <Routers/>
        </BrowserRouter>

    </MuiThemeProvider>,
    document.getElementById('root')
);
