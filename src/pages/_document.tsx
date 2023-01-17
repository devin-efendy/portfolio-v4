import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='description' content='Devin Efendy Portfolio' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <body style={{ background: '#191919' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
