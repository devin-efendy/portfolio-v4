import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import Head from 'next/head'
import fetchFeatureToggle from '../utils/fetchFeatureToggle'
import { FeatureToggleProvider } from '../context/featureToggle'

function MyApp({ Component, pageProps }: AppProps) {
  const featureToggles = fetchFeatureToggle()
  return (
    <>
      <Head>
        <title>Devin Efendy</title>
        <meta name='description' content='Devin Efendy Portfolio' />
      </Head>
      <ChakraProvider theme={theme}>
        <FeatureToggleProvider value={featureToggles}>
          <Box bg='gray.100'>
            <Component {...pageProps} />
          </Box>
        </FeatureToggleProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
