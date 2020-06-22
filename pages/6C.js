import Head from 'next/head'
import Nav from '../components/Nav'
import SixC from '../components/SixC'
import Footer from '../components/Footer'


export default function sixCmodel() {
    return (
      [<Head>
      <title>6C Model</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>,
      <Nav />,
      <div className="container w-screen mx-auto md:w-full">
        <SixC />
        <Footer />
      </div>]
    )
  }
  