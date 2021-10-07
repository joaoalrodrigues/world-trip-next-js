import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        black: "#000000",
        gray: {
            "400": "#47585B",
            "200": "#999999",
            "100": "#DADADA",
            "50": "#F5F8FA"
        },
        white: "#FFFFFF",
        yellow: "#FFBA08"
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.400'
            }
        }
    }
});