export default function Catalytic(){
    return(
        [
        <article className="container mx-auto">
            <div className="px-6 text-center">
            <h2 className="mb-6 text-4xl font-bold">
            Catalysing Systemic Change
            </h2>
            <h3 className="mb-4 text-2xl md:mx-16 lg:mx-48 mx-auto lg:mb-8">
            The PIE Foundation is a Societal Platform based on a systems-thinking approach designed to catalyse social change
            </h3>
            </div>
        </article>    
        ,
        <section className="container mx-auto lg:flex mx-auto text-center items-baseline mb-4 mt-4">
            <div className="h-25 lg:w-1/5 rounded overflow-hidden sm:">
                <img className="h-20 mx-auto" src="assets/platform.svg" alt="Public Goods Platform" />
                <div className="px-6 pb-8">
                    <h2 className="font-bold text-xl mb-2">Public Goods Platform</h2>
                    <p className="text-gray-700 text-sm">The suite of apps providing shared infrastructure is licensed under the Platform Commons License</p>
                </div>
            </div>

            <div className="lg:w-1/5 rounded overflow-hidden">
                <img className="h-20 mx-auto" src="assets/cocreate.svg" alt="Inspiring Co-Creation" />
                <div className="px-6 pb-8">
                    <h2 className="font-bold text-xl mb-2">Inspiring <br/>Co-Creation</h2>
                    <p className="text-gray-700 text-sm">Collaborations with a spirit of co-creation develop feeling of shared ownership and provides access to innovative ideas</p>
                </div>
            </div>

            <div className="lg:w-1/5 rounded overflow-hidden">
                <img className="h-20 mx-auto" src="assets/network.svg" alt="Catalysing Networks" />
                <div className="px-6 pb-8">
                    <h2 className="font-bold text-xl mb-2">Catalysing Networks</h2>
                    <p className="text-gray-700 text-sm">The platform facilitates interactions between civil society,government bodies and the marketplace</p>
                </div>
            </div>

            <div className="lg:w-1/5 rounded overflow-hidden">
                <img className="h-20 mx-auto" src="assets/agency.svg" alt="Restoring Agency" />
                <div className="px-6 pb-8">
                    <h2 className="font-bold text-xl mb-2">Restoring <br/>Agency</h2>
                    <p className="text-gray-700 text-sm">Transparency and data ownership allow agency to be brought back to primary producers and their collectives</p>
                </div>
            </div>

            <div className="lg:w-1/5 rounded overflow-hidden">
                <img className="h-20 mx-auto" src="assets/scale.svg" alt="Designing for Scale" />
                <div className="px-6 pb-8">
                    <h2 className="font-bold text-xl mb-2">Designing for Scale</h2>
                    <p className="text-gray-700 text-sm">Intuitive app design, open access to knowledge resources and 6C model provides framework for scaling</p>
                </div>
            </div>

        </section>
        ]
        )
    }