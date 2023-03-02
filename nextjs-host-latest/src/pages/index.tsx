import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';

const Ads = dynamic(async () => import('nextjsLatest/ads'));

// const Ads = React.lazy(() => import('nextjsLatest/ads'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Host Latest - nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Host Latest - nextjs - Port:4013</h1>
      {/* <React.Suspense fallback="Loading remote 3013"> */}
        <Ads/>
      {/* </React.Suspense> */}
    </>
  )
}
