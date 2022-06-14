import { ThemeOptions } from "@mui/material";

export const lightPalette = {
    50: '#eaedf1',
    100: '#cad3dd',
    200: '#a7b6c6',
    300: '#8498af',
    400: '#69829d',
    500: '#4f6c8c',
    600: '#486484',
    700: '#3f5979',
    800: '#364f6f',
    900: '#263d5c',
    A100: '#a1c7ff',
    A200: '#6ea9ff',
    A400: '#3b8aff',
    A700: '#227bff',
    'contrastDefaultColor': 'light',
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      light: lightPalette[300],
      main: lightPalette[500],
      dark: lightPalette[700],
    },
    secondary: {
      light: lightPalette[500],
      main: lightPalette[900],
      dark: lightPalette[700],
    },
  },
  spacing: 4
};