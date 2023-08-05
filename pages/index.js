import dynamic from 'next/dynamic';
import Head from 'next/head';

const LazyNavbar = dynamic(() => import('@/components/navbar'));
const LazyHomey = dynamic(() => import('@/components/Homey'));
const LazyCompro = dynamic(() => import('@/components/Compro'));
const LazyService = dynamic(() => import('@/components/service'));
const LazyFooter = dynamic(() => import('@/components/footer'));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Snaptive</title>
      </Head>
      <div>
        <LazyHomey />
        <LazyCompro />
        <LazyService />
      </div>
    </div>
  );
}
