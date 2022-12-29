import { Head, Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../theme'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='description' content='Devin Efendy Portfolio' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
