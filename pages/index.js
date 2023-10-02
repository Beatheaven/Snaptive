import dynamic from 'next/dynamic';
import Head from 'next/head';
import LandingPage from '@/components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Snaptive Studio</title>
        <meta name="google-site-verification" content="EwQnbtgsaQYxfiFS8pB6fZuSkeBVLO2wQcNqd6ASpu0" />
      </Head>
      <div>
        <LandingPage/>
      </div>
    </div>
  );
}
