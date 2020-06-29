import Head from 'next/head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'


export default function Platform() {
    return (
      [<Head>
      <title>Methodology: Platform</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>,
      <Nav />,
      <div className="container mx-auto">
        <h1 className="text-4xl px-20 mt-8">Technology</h1>
        <p className="px-20 text-xl my-16">
        The PIE technology stack is built as an open access platform with interoperability 
        standards for various operators in order to create an eco-system of solutions leveraging
         data and system capabilities to holistically address the needs of the domain as oppose 
         to operating in silos.

         <br/><br/>
             -- Add Table here--
         <br/><br/>
         Various vendors can become champions in the form of content or service providers on the 
         platform increasing the optionality and quality of output from the rural level. A richer 
         and vibrant ecosystem leveraging smart analytics and contextual discovery and ranking will 
         enable competition, stronger feedback loops and incentives for greater quality. The stack 
         is currently live in four areas in states of Kerala, Andhra Pradesh, Tamil Nadu and Bihar.
        </p>

        <h1 className="text-2xl px-20 mt-8">Examples</h1>
        <p className="px-20 text-xl my-16">
        A multi-channel, multi-partner inputs and outputs marketplace instance was implemented for 1,150 zero-budget natural farming (ZBNF) farmers in 8 clusters of Andhra Pradesh. Farmers realized a 75% increase in income levels through direct trading with Farmer Producer Organizations (FPOs) as oppose to farm gate pickups by middle men and other operators. Trade transactions valuing about USD 4 Million were conducted on the deployed Marketplace platform.
An instance of advisory integration for zinc application for 300 farmers in single cluster of Tamil Nadu led to 12% increase in Paddy output and resulted in a 20% increase in income for targeted farmers.
In another southern Indian state, 8 unique IT systems were integrated into a unified platform to leverage data and workflow from each of these systems to deliver better service to the farmers.
Another implementation of the platform for creative manufacturing in the state of Bihar is ongoing where thousands of artisans are being aggregated for distributed manufacturing and unified marketing under a single brand, to enhance employment opportunities in the state. Various producer groups are being converted to digitally networked nano-enterprises leveraging the various capabilities of the platform.
        </p>

        </div>,
      <Footer />]
    )
  }