import dynamic from 'next/dynamic';
import Head from 'next/head';
import LandingPage from '@/components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Snaptive</title>
      </Head>
      <div>
        <LandingPage/>
      </div>
    </div>
  );
}
