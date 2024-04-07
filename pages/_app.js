import '../styles/globals.scss'
import Layout from '../components/layout'
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
import { GoogleTagManager } from '@next/third-parties/google'

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


function MyApp({ Component, pageProps }) {

  return (
      <Layout>
       <Component {...pageProps} />
       <GoogleTagManager gtmId="G-NC9WGWVD6X" />
      </Layout>
  )
}

export default MyApp
