import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Providers from './providers';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
    <React.StrictMode>
        <Providers>
            <BrowserRouter>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </BrowserRouter>
        </Providers>
    </React.StrictMode>,
    document.getElementById('root'),
);
