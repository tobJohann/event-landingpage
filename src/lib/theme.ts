'use client'

import { createTheme, Theme } from '@mui/material'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    'h1-subline': React.CSSProperties
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    'h1-subline'?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'h1-subline': true
  }
}

const defTheme = createTheme()

export const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#C3BE2D',
      light: '#E4E4C7',
      contrastText: '#F1F1E1',
    },
    background: {
      default: '#1A1616',
      // paper: '#F1F1E1',
    },
    text: {
      primary: '#F1F1E1',
    },
  },
  typography: {
    fontFamily: ['Gelasio', 'Gelasio Fallback'].join(' '),
    body1: {
      hyphens: 'auto',
      fontSize: '16px',
      fontFamily: 'var(--font-gelasio)',
    },

    body2: {
      // fontSize: 'clamp(18px, 1vw + 0.5rem, 20px)',
      fontFamily: 'var(--font-gelasio)',
    },

    h1: {
      fontWeight: 800,
      fontFamily: 'var(--font-plus-jakarta)',
      fontSize: 'clamp(5.5rem, 2vw + 0.5rem, 4rem)',
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      fontFamily: 'var(--font-plus-jakarta)',
      textTransform: 'uppercase',
    },

    h3: {
      fontSize: 'clamp(1.75rem, 1vw + 0.5rem, 2.25rem)',
      fontFamily: 'var(--font-plus-jakarta)',
      fontWeight: 700,
      lineHeight: 1.3,
    },

    h4: {
      fontSize: '18px',
      fontFamily: 'var(--font-plus-jakarta)',
      fontWeight: 700,
      lineHeight: 1.3,
    },

    overline: {
      fontSize: '1rem',
      fontFamily: 'var(--font-plus-jakarta)',
      fontWeight: 200,
      lineHeight: 1,
      letterSpacing: '1.6px',
      textTransform: 'uppercase',
      opacity: 0.8,
    },

    button: {
      fontFamily: '"Plus Jakarta Sans"',
      // fontSize: 'clamp(18px, 1vw + 0.5rem, 22px)',
      fontWeight: 700,
      letterSpacing: '0.25px',
      lineHeight: 1,
    },
  },

  components: {
    MuiContainer: {
      defaultProps: { maxWidth: 'xl' },
      styleOverrides: {
        root: {
          maxWidth: '100% !important',
          margin: 0,
          padding: '0 32px',
          [defTheme.breakpoints.up('md')]: {
            padding: '0 64px',
          },
          [defTheme.breakpoints.up('lg')]: {
            padding: '0 128px',
          },
          [defTheme.breakpoints.up('xl')]: {
            padding: '0 256px',
          },
          '@media screen and (min-width: 2000px)': {
            padding: '0 15vw',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
      variants: [
        {
          props: { size: 'large' },
          style: {
            padding: '16px 24px',
          },
        },
        {
          props: { size: 'medium' },
          style: {
            letterSpacing: '.25px',
            padding: '12px 32px',
          },
        },
        {
          //TODO add new button variant
          // @ts-ignore
          props: { variant: 'tonal', color: 'primary' },
          style: {
            color: 'var(--mui-palette-primary-main)',
            backgroundColor: 'var(--mui-palette-primary-light)',
            ':hover': {
              backgroundColor: '#969683',
            },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fieldset: {
            borderWidth: '2px',
            borderRadius: '12px',
            borderColor: '#141414',
          },

          input: {
            fontWeight: 700,
            fontSize: '22px',
          },
          '.MuiFormHelperText-root': {
            fontFamily: 'var(--font-plus-jakarta)',
          },
        },
      },
      defaultProps: {
        fullWidth: true,
        size: 'small',
      },
    },

    MuiStack: {
      defaultProps: {
        direction: 'row',
        spacing: 4,
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          'h1-subline': 'p',
        },
      },
    },
  },
})
