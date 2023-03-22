export const theme = {
  colors: {
    primary: {
      light: '#00B37E',
      dark: '#00875F',
    },
    secondary: {
      light: '#F75A68',
      dark: '#AA2834',
    },
    base: {
      white: '#fff',
      gray: {
        100: '#e1e1e6',
        200: '#c4c4cc',
        300: '#7c7c8a',
        400: '#323238',
        500: '#29292e',
        600: '#202024',
        700: '#121214',
      },
    },
  },
  fonts: {
    family: {
      regular: 'Roboto_400Regular',
      bold: 'Roboto_700Bold',
    },
    weight: {
      regular: 400,
      bold: 500,
    },
    size: {
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
    },
  },
} as const;
