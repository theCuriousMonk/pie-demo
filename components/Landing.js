export default function Landing() {
    return(
        /* background: "linear-gradient(90deg, #276749 0%, #48bb78 100%)" */
        <div className="py-20 bg-fixed sm:bg-fixed md:bg-fixed lg:bg-scroll xl:bg-fixed" style={{background: `url(assets/bg-a.jpg)`}}>
            <div className="container mx-auto px-8">
                <h2 className="text-4xl font-bold mb-2 text-white">
                Platform <span className="italic font-light">for</span> <br/>Inclusive<br/>Entrepreneurship
                </h2>
                <h3 className="text-2xl mb-8 text-gray-200">
                <span className="">Creating the opportunity for 100 <br/>million artisans and farmers<br/>to reach prosperity.</span>
                </h3>
                <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg hover:shadow-xl hover:bg-gray-100 uppercase tracking-wider">
                    Learn More
                </button>
            </div>
        </div>
    )
}