import { extendTheme } from '@chakra-ui/react';

const fonts = {
  body: 'Poppins',
  heading: 'Poppins',
};

const global = {
  body: {
    color: '#65617D',
  },
};

const customTheme = extendTheme({
  fonts,
  styles: {
    global,
  },
});

export default customTheme;
