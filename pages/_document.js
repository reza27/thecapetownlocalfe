import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="dark">
      <Head >
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="The Cape Town Local - We live your experience. Join us for guided hiking tours up Table Mountain and Lion's Head.">
      <meta name="keywords" content="The Cape Town Local, Hiking, Tour Guides, Guided Tours">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat&family=Alexandria&family=Roboto:wght@300;500;700;800&display=swap" rel="stylesheet"/>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAitjjkU75KclxN66oxm8q2_oMMPY4fA0E&libraries=places"></script>
    </Head>
    <body className="dark:bg-gray-800">
        <Main />
        <NextScript />

      </body>

    </Html>
  )
}
