import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

import { ServerStyleSheet } from 'styled-components'

function MyDocument() {
  return (
    <Html>
      <Head>
        <meta name='description' content='Devin Efendy Portfolio' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <body style={{ backgroundColor: '#191919' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument

MyDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  } finally {
    sheet.seal()
  }
}
