import Head from 'next/head'
import Nav from '../components/Nav'
import Landing from '../components/Landing'
import About from '../components/About'
import Feature from '../components/Feature'
import CallToAction from '../components/CallToAction'
import Catalytic from '../components/Catalytic'
import Footer from '../components/Footer'
import Slider from '../components/Slider'


export default function Home() {
  return (
    
    <div>
    <Head>
    <title>PIE Foundation</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <Nav />
    <Landing />
    <About />
    <Feature />
    <Catalytic />
    <Slider/>
    <CallToAction />
    <Footer />
    </div>
  )
}
