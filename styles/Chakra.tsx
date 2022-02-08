import { extendTheme } from '@chakra-ui/react';
import colors from './Colors';
import fonts from './Fonts';
import breakpoints from './Breakpoints';

const styles = {
  global: {
    // styles for the `body`
    body: {
      fontFamily: 'Montserrat',
    },
    '*': {
      margin: 0,
      padding: 0,
    },
  },
};

const theme = extendTheme({
  styles,
  breakpoints,
  fonts,
  colors,
});

export default theme;
