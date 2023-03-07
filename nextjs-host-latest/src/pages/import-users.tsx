// import dynamic from 'next/dynamic';
// const page = import('nextjsLatest/users');

// const Page = dynamic(() => import('nextjsLatest/users'));
// Page.getInitialProps = async ctx => {
//   const getInitialProps = (await page).default?.getInitialProps;
//   if (getInitialProps) {
//     return getInitialProps(ctx);
//   }
//   return {};
// };
// export default Page;

import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';

const Users = dynamic(async () => import('nextjsLatest/users'));
// const Ads = React.lazy(() => import('nextjsLatest/ads'));

export default function Home() {
  return (
    <>
      {/* <React.Suspense fallback="Loading remote 3013"> */}
        <Users/>
      {/* </React.Suspense> */}
    </>
  )
}





