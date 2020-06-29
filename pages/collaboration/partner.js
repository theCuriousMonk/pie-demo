import Head from 'next/head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'


export default function Partner() {
    return (
      [<Head>
      <title>Collaboration: Partners</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>,
      <Nav />,
      <div className="container mx-auto">
        <h1 className="text-4xl px-20 mt-8">Our Partners</h1>
        <p className="px-20 text-xl my-16">
            <img src="/assets/partners.png" />

        </p>
</div>,
<Footer />]
)
      }