import Head from 'next/head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'


export default function Creators() {
    return (
      [<Head>
      <title>About: Co-creator Partners</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>,
      <Nav />,
      <div className="container mx-auto">
        <h1 className="text-4xl px-20 mt-8">Initial Co-Creation Partners</h1>

        <h1 className="text-2xl px-20 mt-8">Industree</h1>
        <p className="px-20 text-xl my-16">

        Established in 2000, Industree Foundation holistically tackles the root causes of poverty by creating an ownership based, organised creative manufacturing ecosystem for micro-entrepreneurs. Industree has set up 2 of India’s largest globally compliant and profitable artisan producer companies, jointly earning annual revenues of over Rs 12 crore.

        </p>

        <h1 className="text-2xl px-20 mt-8">Platform Commons Foundation</h1>
        <p className="px-20 text-xl my-16">

        PCF has developed technology-based solutions to empower and enable  grassroot entrepreneurs with digital tools to create networked multi-dimensional flows within and across ecosystems, to optimise and achieve scale. Cumulatively,  a million plus waste-pickers, farmers, school principals & teachers, and unemployed youth are using its services.
        </p>


        <h1 className="text-2xl px-20 mt-8">Vrutti
</h1>
        <p className="px-20 text-xl my-16">

        Through its ‘3-Fold Model’, Vrutti has impacted over 120,000 smallholder farmers, established 90-odd producer companies and continues to support them. It also supports over 130,000 people who are marginalised and vulnerable to HIV, over 500 micro, small and medium enterprises, and about 40,000 marine fisherfolk. 

        </p>
</div>,
<Footer />]
    )
}