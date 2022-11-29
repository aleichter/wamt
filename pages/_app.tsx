import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
      TagManager.initialize({ gtmId: 'GTM-NBBVK8L' });
  }, []);
  return (
    <>
      <Head>
        <title>Weak Ass Mushroom Tea</title>
        <meta name="weakassmushroomtea" content="Website for the band Weak Ass Mushroom Tea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
