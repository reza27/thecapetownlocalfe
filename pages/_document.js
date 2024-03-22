import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

export default function Document() {
  return (
    <Html className="dark">
      <Head >
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat&family=Alexandria&family=Roboto:wght@300;500;700;800&display=swap" rel="stylesheet"/>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAitjjkU75KclxN66oxm8q2_oMMPY4fA0E&libraries=places"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-NC9WGWVD6X"></script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-NC9WGWVD6X');`}
      </Script>
    </Head>
    <body className="dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
