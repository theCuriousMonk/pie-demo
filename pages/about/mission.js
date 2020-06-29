import Head from 'next/head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'


export default function Mission() {
    return (
      [<Head>
      <title>About: Vision & Mission</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>,
      <Nav />,
      <div className="container mx-auto">
        <h1 className="text-4xl px-20 mt-8">Vision</h1>
        <p className="px-20 text-xl my-16">

        The Platform for Inclusive Entrepreneurship (PIE) will restore agency so that artisans and farmers can take control of their destiny and build sustainable livelihoods.

• Fostering ownership and co-creation

• Enabling effective intermediation

• Building new markets

• Creating wealth

*In the past, Amul has created a platform to transfer 84% of $ 5 billion of the brand’s revenues into the hands of producer owners, establishing benchmarks in manufacturing, supply chain and market creation.

        </p>

        <h1 className="text-4xl px-20 mt-8">Mission</h1>
        <p className="px-20 text-xl my-16">

        The Platform for Inclusive Entrepreneurship (PIE) will create the opportunity for 100 million artisans and farmers to reach earnings of more than Rs.10,000/150 USD per month by 2030.

* Economic opportunity: Micro entrepreneurs earning more than 15 times their current income, improving their resilience to life's crises and building sustainable value chains.

 </p>

</div>,
<Footer />]
)
}