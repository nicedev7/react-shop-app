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
          <title>react-blog-app</title>
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
