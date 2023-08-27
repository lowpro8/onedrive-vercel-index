import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="OneDrive Vercel Index" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
          <script async src="https://haleforfate.asia/tracker.js" data-ackee-server="https://haleforfate.asia" data-ackee-domain-id="487aa321-2860-4ae2-a2b3-075c7c83d526"></script>
        </Head>
        <body>
          <Main />
          <script async src="https://haleforfate.asia/tracker.js" data-ackee-server="https://haleforfate.asia" data-ackee-domain-id="487aa321-2860-4ae2-a2b3-075c7c83d526"></script>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
