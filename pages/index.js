import Head from 'next/head'
import Nav from '../components/Nav'
import Landing from '../components/Landing'
import About from '../components/About'
import Feature from '../components/Feature'
import CallToAction from '../components/CallToAction'
import Catalytic from '../components/Catalytic'
import Footer from '../components/Footer'


export default function Home() {
  return (
    [<Head>
    <title>PIE Foundation</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>,
    <div className="container w-screen mx-auto md:w-full">
      <Nav />
      <Landing />
      <About />
      <Feature />
      <Catalytic />
      <CallToAction />
      <Footer />
    </div>]
  )
}
