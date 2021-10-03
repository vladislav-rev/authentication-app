import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

import { ThemeProvider } from '@material-ui/core/styles';
import { themes } from './theme';
import { UserProvider } from './store/user';

ReactDOM.render(
    <ThemeProvider theme={themes.themeLight}>
        <React.StrictMode>
            <UserProvider>
                <Router>
                    <App />
                </Router>
            </UserProvider>
        </React.StrictMode>
    </ThemeProvider>,
    document.getElementById('root')
);
