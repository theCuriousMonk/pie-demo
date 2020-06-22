export default function Slider() {
    return (
        <section className="carousel relative shadow-2xl bg-white">
        <div className="carousel-inner relative overflow-hidden w-full">
        {/* <!--Slide 1--> */}
        <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden={true} checked="checked" />
        <div className="carousel-item absolute opacity-0" style={{height: `50vh`}}>
        <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">Andhra Pradesh</div>
        </div>      
        {/* <!--Slide 2--> */}
        <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="true" />
        <div className="carousel-item absolute opacity-0" style={{height: `50vh`}}>
        <div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">Bihar</div>
        </div>      
        {/* <!--Slide 3--> */}
        <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="true" />
        <div className="carousel-item absolute opacity-0" style={{height: `50vh`}}>
        <div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">Tamilnadu</div>
        </div>    
        {/* Add additional indicators for each slide */}
        <ol className="carousel-indicators">
        <li className="inline-block mr-3">
        <label for="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
        </li>
        <li className="inline-block mr-3">
        <label for="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
        </li>
        <li className="inline-block mr-3">
        <label for="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
        </li>
        </ol>
        </div>
        </section>
        )
    }