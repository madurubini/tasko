import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: '#050303',
                color: '#000000',
            },
        },
    },
});

export default theme;
