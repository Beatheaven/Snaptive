import { Html, Head, Main, NextScript } from 'next/document'
import link from "next/link"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
      <meta name="google-site-verification" content="EwQnbtgsaQYxfiFS8pB6fZuSkeBVLO2wQcNqd6ASpu0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
