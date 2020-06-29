import Head from 'next/head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'


export default function Learning() {
    return (
      [<Head>
      <title>Genesis: Learning</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>,
      <Nav />,
      <div className="container mx-auto">
        <h1 className="text-4xl px-20 mt-8">Learnings so far</h1>
        <p className="px-20 text-xl my-16">

        Over the last 25 odd years of collective experience in developing self-sustaining producer companies in the artisan and agriculture sectors, we have a clear understanding of what works in both the sectors. Vrutti for instance has worked with over 121,000 small and marginal farmers across India over a decade whereas the Industree Foundation has worked with 60,000 plus poor and vulnerable producers in the same period. Our assessment as has been shared below comes from this experience. 

In order to make systemic change, we need to ensure that the ownership is in the hands of the producers. Creating producer-owned companies in the manufacturing sector therefore is necessary to ensure producers can carry on the Cultural Intellectual Property inherited from previous generations rather than handing it over a platter to designers, investors and a range of middlemen. Ownership would also ensure they get a fair share of the wages and dividends from these companies.

Likewise, we need to bring manufacturing hubs closer to producers. Rather than take the producer away to centralised hubs of manufacturing, and disrupt families, allow for manufacturing within a radius of five kilometres of the residence and organise them in clusters of 100-200 members. This distributed model of decentralised manufacturing has positive impacts on the lives of individuals and communities both economically and socially speaking and reduces environmental cost that is associated with centralised manufacturing.

In order to set up decentralised manufacturing units, capital is key. This would essentially mean, supporting producer collectives with two kinds of financing – seed capital for the formation and management of the enterprise and working capital to fund inventory and receivables. To ensure artisans retain full ownership of the company, we use philanthropic funding for seed capital. Our sources include grants from private foundations, CSR funds from large corporates and various government programmes. Working capital is sourced to the extent possible from impact investors willing to lend at below market rates and to longer payment terms. In our experience, we find that this blended finance approach helps secure artisan ownership and reduces funding costs, whilst also providing meaningful investment opportunities to social impact investors.

Further, in order for decentralised, producer-owned companies to be successful in the long run, they additionally need to be provided with hand holding and skill building at the start. For this, support from a multi-disciplinary team of professionals to manage a comprehensive range of activities from the formation of producer companies to revenue generation and income payouts to members would be necessary to enable the companies to become self-sufficient eventually where companies are able to hire managers or promote some of its own members into leadership positions and pay for these.

While we have had much to learn and reflect on, within the overall context of over 460 million informal producers in India, our impact to date has been modest. However, our experiences over the last 25 years in working with the artisanal and farming community illustrate that Deep Hand Holding works in making producer collectives successful and self-sustaining. This approach has the potential to dramatically increase the scale of impact and will require hundreds of collective building organisations to adopt the approach to create thousands of producer companies. 


        </p>
      </div>,
      <Footer />]
    )
  }