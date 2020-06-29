// export default function Slider() {
//     return (
//         <section className="carousel relative shadow-xl bg-white">
//         <div className="carousel-inner relative overflow-hidden w-full">
//         {/* <!--Slide 1--> */}
//         <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden={true} checked="checked" />
//         <div className="carousel-item absolute opacity-0" style={{height: `75vh`}}>
//         <img src="/assets/landing-banner.png" />
//         {/* <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">Andhra Pradesh</div> */}
//         </div>      
//         {/* <!--Slide 2--> */}
//         <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="true" />
//         <div className="carousel-item absolute opacity-0" style={{height: `75vh`}}>
//         <div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">Bihar</div>
//         </div>      
//         {/* <!--Slide 3--> */}
//         <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="true" />
//         <div className="carousel-item absolute opacity-0" style={{height: `75vh`}}>
//         <div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">Tamilnadu</div>
//         </div>    
//         {/* Add additional indicators for each slide */}
//         <ol className="carousel-indicators">
//         <li className="inline-block mr-3">
//         <label for="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
//         </li>
//         <li className="inline-block mr-3">
//         <label for="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
//         </li>
//         <li className="inline-block mr-3">
//         <label for="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
//         </li>
//         </ol>
//         </div>
//         </section>
//         )
//     }


//     export default function Slider() {
//         return(
//             <div class="slideshow-container">

// <div class="mySlides fade">
//   <div class="numbertext">1 / 3</div>
//   <img src="/assets/landing-banner.png" style={{width:`100%`}} />
//   <div class="text">Caption Text</div>
// </div>

// <div class="mySlides fade">
//   <div class="numbertext">2 / 3</div>
//   <img src="/assets/bg.jpg" style={{width:`100%`}} />
//   <div class="text">Caption Two</div>
// </div>

// <div class="mySlides fade">
//   <div class="numbertext">3 / 3</div>
//   <img src="/assets/bg-a.jpg" style={{width:`100%`}} />
//   <div class="text">Caption Three</div>
// </div>

// </div>
//         )
//     }
import React from 'react';
import SwiftSlider from 'react-swift-slider'

const data =  [
  {'id':'1','src':'/assets/bg-a.jpg'},
  {'id':'2','src':'/assets/landing-banner.png'},
  {'id':'3','src':'https://media.mfbproject.co.za/repos/2018-alfa-romeo-stelvio-quadrifoglio-specs-photos-speed-2.jpg'},
  {'id':'4','src':'https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg'},
  {'id':'5','src':'https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png'}
];

class Slider extends React.Component {
  render() {
    return (
      <SwiftSlider data={data}/>
    );
  }
}

export default Slider;