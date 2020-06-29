import Head from 'next/head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'


export default function Problem() {
    return (
      [<Head>
      <title>Genesis: Problem</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>,
      <Nav />,
      <div className="container mx-auto">
        <h1 className="text-4xl px-20 mt-8">Problem</h1>
        <p className="px-20 text-xl my-16">

        Throughout the world, millions of producers and farmers with unique skills to produce meaningful and wholesome products have been reduced to mere labor in the value chain. The lack of opportunities, low wages, inconsistent work, exploitation by middlemen, limited market access, insufficient finances cause systemic issues with deep economic repercussions and major social implications such as limited access to education, inter-generational poverty, gender inequality and poor health conditions. Producers receive meager compensation and have negligible ownership in what they do. This gap of potential earnings is a huge untapped economic opportunity not only for producers, but for the world economy as well. Looking at India alone, the possible income increase for producers and farmers could total to roughly USD 180 billion, while averaging a USD 780 billion loss in revenue for the country. Solving this issue is likely to have a huge prospective profit for producers and economies when implemented across the world.

Given the nature of these sectors, there is clear absence of labor protection, social security, poor skill development opportunities, and vulnerability to disruptions – both micro (e.g., personal injury) and macro (as seen with COVID-19) exacerbating the problems faced by the informal sector. The lack of adequate work available locally also forces individuals or families to migrate to already dense cities. India accounts for a staggering 79 million migrant families, the largest number worldwide. Migrant families are subject to extreme stresses including unhygienic living conditions in temporary shanties, lack of schooling opportunities for children and the absence of familiar support networks.

In India, legislation has created a structural mechanism for collectives to help organize informal workers. This has led to the creation of 7,374 organizations that collectively cover 4.3 million workers (0.9% of the informal workers). The Small Farmers Agri Consortium, for instance, facilitates the formation of agricultural producer companies. These collectives focus on buying inputs such as seeds and fertilizers, resulting in a modest increase in the income of the members (10-15%).

        </p>
      </div>,
      <Footer />]
    )
  }