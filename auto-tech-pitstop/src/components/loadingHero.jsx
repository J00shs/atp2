import gsap from "gsap";
import { SplitText } from "gsap/all";

import {useGSAP} from '@gsap/react'


const loadingHero = () => {

  
  useGSAP(() => {
    const loadingTitle = new SplitText("#hero-title", {type: "chars"});
    const subTitle = new SplitText("#subtitle", {type:"chars"});

    const tl = gsap.timeline();

    tl.from("#bmw",{
      x:"-100vw",
      duration:1,
      ease:"power3.out"
    })
    .from(
      loadingTitle.chars,
      {
        x:-100,
        opacity:0,
        duration:0.6,
        ease:"power3.out",
        stagger:0.01,
      },
      "-=0.2"
    )
    .from(subTitle.chars,{
      x:-100,
      opacity:0,
      duration:0.6,
      ease:"power3.out",
      stagger:0.01,

    }, "-=0.2")
    .to("#hero-title",{
      x:"100vw",
      duration:1,
      ease:"power3.in",
      delay:0.1,
    })
    
    .to(subTitle.chars,{
      x:"100vw",
      duration:0.6,
      ease:"power3.in",
      delay:0.1,
    });
  });
  return (
    <div className="flex-center flex-col font-sans font-bold">

  <div id="hero-title" className="flex items-center text-5xl ">


    <h1 id="title" className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">
      Auto Tech Pitstop
    </h1>

     <img
      id="bmw"
      src="/images/bmwm3.png"
      alt="BMW M3"
      className="w-28 sm:w-36 md:w-44 lg:w-50"
    />
    
  </div>
  <h2 id="subtitle" className="text-2xl text-lg sm:text-xl md:text-2xl">
    Proudly Serving Long Island and Queens
  </h2>


  


</div>
  
  )
}

export default loadingHero