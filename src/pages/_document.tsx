import Document, { Html, Head, Main, NextScript } from 'next/document'

/**
 * Doc Component
 */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          {/**
           * do not use <title> in Document Component
           * @see https://nextjs.org/docs/messages/no-document-title
           */}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
