import { Html, Head,Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap"
          rel="stylesheet"
          /> */}
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin   />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
          <Script
            id='analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html:`!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-N5BNJMN",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer")`
            }}
          />
      </Head>
      <body>
      <Script
        src="https://pi-live.sagepay.com/api/v1/js/sagepay.js"
        strategy="lazyOnload"
        onLoad={() =>
          addLog(`script loaded correctly, window.FB has been populated`)
        }
      />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}