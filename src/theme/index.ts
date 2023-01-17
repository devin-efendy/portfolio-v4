import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
  colors: {
    sidebar: {
      bg: '#191919',
      a: 'gray.900',
    },
    section: {
      bg: '#191919',
      primary: 'white',
    },
  },
})

export default theme
