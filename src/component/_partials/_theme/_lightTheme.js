/*export const lightPalette = {
    50: '#fef9fa',
    100: '#fcf1f2',
    200: '#fae7ea',
    300: '#f7dde2',
    400: '#f6d6db',
    500: '#f4cfd5',
    600: '#f3cad0',
    700: '#f1c3ca',
    800: '#efbdc4',
    900: '#ecb2ba',
    A100: '#ffffff',
    A200: '#ffffff',
    A400: '#ffffff',
    A700: '#ffffff',
    'contrastDefaultColor': 'light',
};*/

export const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#d96161',
      light: 'rgb(224, 128, 128)',
      dark: 'rgb(151, 67, 67)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f4cfd5',
      light: 'rgb(246, 216, 221)',
      dark: 'rgb(170, 144, 149)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    background: {
      default: '#f5f5f5',
      paper: '#eceff1',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  spacing: 4
};