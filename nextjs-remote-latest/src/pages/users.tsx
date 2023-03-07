import dynamic from 'next/dynamic';
const page = import('../realPages/users');

const Page = dynamic(() => import('../realPages/users'));
Page.getInitialProps = async ctx => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};
export default Page;