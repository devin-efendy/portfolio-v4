import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Devin Efendy</title>
        <meta name='description' content='Devin Efendy Portfolio' />
      </Head>
      <ChakraProvider theme={theme}>
        <Box bg='gray.50'>
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  )
}

export default MyApp
