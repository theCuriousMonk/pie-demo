export default function Feature() {
    return(
<section className="container mx-auto px-6 p-10">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
    How PIE can help?
  </h2>
  {/* <div className="flex items-center flex-wrap mb-20">
    <div className="w-full md:w-1/2">
      <h4 className="text-3xl text-gray-800 font-bold mb-3">Exercise Metric</h4>
      <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
    </div>
    <div className="w-full md:w-1/2">
      <img src="assets/health.svg" alt="Monitoring" />
    </div>
  </div> */}

  <div className="flex items-center flex-wrap mb-20">
    <div className="w-full md:w-1/2">
      <img src="assets/report1.png" alt="Reporting" />
    </div>
    <div className="w-full md:w-1/2 pl-10">
      <h4 className="text-3xl text-gray-800 font-bold mb-3">Professional Support</h4>
      <p className="text-gray-600 mb-8 text-xl">PIE takes an ecosystem approach and brings together the all the key players that are instrumental in ensuring a producer collective’s success. This includes collective building NGOs, governmental agencies, private sector service providers, buyers and suppliers. The PIE ecosystem will be organized by the 6C Framework.</p>
      <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">Learn about 6C Model</button>
    </div>
  </div>

  <div className="flex items-center flex-wrap mb-20">
    <div className="w-full md:w-1/2 pr-10">
      <h4 className="text-3xl text-gray-800 font-bold mb-3">Open-Source Technology</h4>
      <p className="text-gray-600 mb-8 text-xl">The PIE technology stack is built as an open access platform with interoperability standards for various operators in order to create an eco-system of solutions leveraging data and system capabilities to holistically address the needs of the domain as oppose to operating in silos.</p>
      <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">Get Details</button>
      <br/>
    </div>
    <div className="w-full md:w-1/2">
      <img className="mt-10" src="assets/sync.png" alt="Syncing" />
    </div>
  </div>
</section>
    )
}