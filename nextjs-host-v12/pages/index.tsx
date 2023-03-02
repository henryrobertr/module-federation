import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';

const Cart = dynamic(() => import('nextjsV12/cart'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Host V12 - nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Host V12 - nextjs - Port:4012</h1>
      <React.Suspense fallback="Loading remote 3012">
        <Cart/>
      </React.Suspense>
    </>
  )
}

