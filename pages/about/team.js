import Head from 'next/head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'


export default function Team() {
    return (
      [<Head>
      <title>About: Team</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>,
      <Nav />,
      <div className="container mx-auto">
        <h1 className="text-4xl px-20 mt-8">Team</h1>
        <p className="px-20 text-xl my-16">
        Neelam Chhiber <br/>Co-founder and Managing Trustee at the Industree Foundation and Mother Earth, 
        Neelam has three decades of experience in working with artisans in rural areas. 
        Neelam and her team have built a holistic ecosystem that works with rural women 
        to equip them with the necessary tools and skills to set up self-owned enterprises 
        close to their homes, thus ensuring mainstreaming. This has led to greater control 
        over their economic security and resources to significantly improve economic and social gains. 
        Having already impacted over 60,000 producers, her aim is to strengthen the resources of millions 
        of producers in the next 10 years.
        </p>

        <p className="px-20 text-xl my-16">
        Prashant Mehra <br/>Prashant is a social intrapreneur working at Mindtree and the Platform 
        Commons Foundation in the area of livelihoods. His chosen vehicles for change are waste 
        management, rural supply-chains, and small farmers. He is presently building PIE to support 
        micro businesses and social enterprises in the aforementioned areas. His professional goal 
        is to help build socio-economic inclusion, helping marginalized community members and 
        micro-entrepreneurs operate and compete in mainstream economics, thus championing business 
        innovation targeted towards livelihoods and poverty reduction and fostering scalability in the 
        social business ecosystem by way of building a technology platform
        </p>

        <p className="px-20 text-xl my-16">
        Narayanan Raghunathan <br/>Raghunathan is the Founding Director of the Catalysts Group of Institutions 
        and has over two decades of experience working across sectors, geographies and communities. 
        His passion is to facilitate solutions at a scale that eliminate inequities and marginalization. 
        He believes that an integrated and people-centric ecosystem is a must. The DNA for sustainable 
        change and transformation is an ecosystem integrating capacities of the communities, efficiencies 
        of the markets, a vision of the facilitators and powers of the state. Towards this, he strives 
        to design models and approaches, test them, nurture partnerships to reach scale and engage with 
        policy to create an enabling space.
        </p>

</div>,
<Footer />]
)
}