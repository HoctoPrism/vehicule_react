/*export const darkPalette = {
    50: '#faecec',
    100: '#f4d0d0',
    200: '#ecb0b0',
    300: '#e49090',
    400: '#df7979',
    500: '#d96161',
    600: '#d55959',
    700: '#cf4f4f',
    800: '#ca4545',
    900: '#c03333',
    A100: '#ffffff',
    A200: '#ffd4d4',
    A400: '#ffa1a1',
    A700: '#ff8888',
    'contrastDefaultColor': 'dark',
};*/

export const darkTheme = {
  palette: {
    type: 'dark',
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
      default: '#242c2f',
      paper: '#394248',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  spacing: 4,
};