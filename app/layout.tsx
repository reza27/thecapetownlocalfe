import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; //importing font awesome css
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import StoreProvider from "./StoreProvider";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="The Cape Town Local - We live your experience. Join us for guided hiking tours up Table Mountain and Lion's Head."
          />
          <meta
            name="keywords"
            content="The Cape Town Local, Hiking, Tour Guides, Guided Tours"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat&family=Alexandria&family=Roboto:wght@300;500;700;800&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <Navbar />
          {children}
          <Footer />
          <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_ANALYTICS}`} />
        </body>
      </html>
    </StoreProvider>
  );
}
