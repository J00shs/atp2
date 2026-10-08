import gsap from "gsap";
import { SplitText } from "gsap/all";

import {useGSAP} from '@gsap/react'


const loadingHero = ({onComplete}) => {

  
  useGSAP(() => {
    const loadingTitle = new SplitText("#title", {type: "chars"});
    const subTitle = new SplitText("#subtitle", {type:"chars"});

    const tl = gsap.timeline();

    tl.from("#bmw",{
      x:"-100vw",
      duration:0.7,
      ease:"power3.out"
    })
    .from("#infiniti",{
       x:"-100vw",
       duration:0.7,
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
      x:"110vw",
      duration:1,
      ease:"power3.in",
    })
    
    .to(subTitle.chars,{
      x:"100vw",
      duration:0.6,
      ease:"power3.in",
      onComplete: onComplete
    });

  });

  
  return (
  <div className="flex-center flex-col font-bold text-white">

  <div id="hero-title" className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">

   
     <img
      id="infiniti"
      src="/images/infinitiq50.png"
      alt="infinitiq50"
      className="w-30 sm:w-37 md:w-48 lg:w-55 "
    />

    <h1 id="title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap" >
     Auto Tech Pitstop
      </h1>

     <img
      id="bmw"
      src="/images/bmwm3.png"
      alt="BMW M3"
      className="w-28 sm:w-36 md:w-44 lg:w-50 "
    />
    
  </div>
  <h2 id="subtitle" className="text-lg sm:text-xl md:text-2xl">
    Proudly Serving Long Island and Queens
  </h2>
</div>
  
  )
}

export default loadingHero