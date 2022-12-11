import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="dark">
      <Head >
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat&family=Alexandria&family=Roboto:wght@300;500;700;800&display=swap" rel="stylesheet"/>
    </Head>
    <body className="dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
