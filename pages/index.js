import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Homey from '@/components/Homey'
import Compro from '@/components/Compro'
import Service from '@/components/service'
import Footer from '@/components/footer'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Snaptive</title>
      </Head>
    <div className="bg-[url('/img/BG.svg')]  bg-cover bg-repeat object-cover sm:bg-[url('/img/BG.svg')]">
    
    <Navbar/>
    <Homey/>
    <Compro/>
    <Service/>
    <Footer/>
    </div>
  </div>
  )
}
