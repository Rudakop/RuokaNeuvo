import Head from 'next/head';
import Store from '@/store'
import Layout from '@/components/Layout';

import 'antd/dist/antd.css'
import './styles.css'

function YelpApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Yelp</title>
      </Head>
      <Store>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Store>
    </>
  );
}

export default YelpApp;
