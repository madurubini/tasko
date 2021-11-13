import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Providers from './providers';
import * as C from '@chakra-ui/react';
import theme from './styles/theme';

ReactDOM.render(
    <React.StrictMode>
        <Providers>
            <BrowserRouter>
                <C.ChakraProvider resetCSS={true} theme={theme}>
                    <App />
                </C.ChakraProvider>
            </BrowserRouter>
        </Providers>
    </React.StrictMode>,
    document.getElementById('root'),
);
