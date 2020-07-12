export default function CallToAction() {
    return(
        <section style={{background: '#f2f9f0'}}>
        <div className="mx-auto px-6 text-center py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800">
        GET IN TOUCH!
        </h2>
        <h3 className="mb-8 text-2xl text-gray-700">
        Get connected with us & find the best for your enterprise
        </h3>
        <form className="w-1/2 mx-auto">

        <input class="w-1/2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="name" placeholder="Please Enter Your Name"></input>
        <input class="w-1/2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="Please Enter Your Email"></input>
        <a
        href="#" className="bg-white font-bold text-green-700 hover:bg-green-700 hover:text-white rounded-full mt-8 py-4 px-8 shadow-lg hover:shadow-xl uppercase tracking-wider"
        >
        Join Today
        </a>
        </form>
        </div>
        </section>
        )
    }