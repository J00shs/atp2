
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";



// TODO - Fix homepage fade-in animation, animate attn-three and four
const Home = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const video = videoRef.current;
    let split = SplitText.create("#attn-one",{type:"chars"});
    let split_two = SplitText.create("#attn-two",{type:"chars"});
    gsap.from(split.chars, {
      duration: 0.9,
      x: -80,
      stagger:0.02,
    })
    gsap.from(split_two.chars, {
      duration: 0.9,
      x: -80,
      stagger:0.02
    })
    // Source of fade-in issue
    // gsap.from("#hero-home",{
    //         ease:"power1.in",
    //         duration: 1,
    //         opacity: 0
    //     });
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-home",
        start: "top top",
        end: "bottom 20%",
        scrub: 0.5,
        pin: true,
        invalidateOnRefresh:true,
        markers:false //allows you to debug
      }
    });
    tl.to("#attn-one", {
      opacity: 0,
      x:-200,
      duration:0.2,
      ease:"back.out",
    }, 0);
    tl.to("#attn-three", {
      opacity: 0,
      x:200,
      duration:0.2,
      ease:"back.out",
    }, 0);


    tl.to("#attn-two", {
      opacity: 0,
      x:-200,
      duration:0.3,
      ease:"back.out",
    }, 0.022);

    tl.to("#attn-four", {
      opacity: 0,
      x:200,
      duration:0.3,
      ease:"back.out",
    }, 0.022);
    

   

    const setupAnimation = () => {
      tl.fromTo(
        video,
        {
          currentTime: 0
        },
        {
          currentTime: video.duration || 1,
          ease: "none"
        }, 0
      );
    };

    if (video.readyState >= 1) {
      setupAnimation();
    } else {
      video.addEventListener("loadedmetadata", setupAnimation, { once: true });
    }

    ScrollTrigger.refresh();

    return () => {
      video.removeEventListener("loadedmetadata", setupAnimation);
    };
  }, []);

  return (
    <>
      <section id="hero-home" className="relative h-[100svh]" style={{viewTransitionName:"home"}}>
        <div id="home-div" className="absolute flex inset-0 items-center justify-center" >
          <video
            ref={videoRef}
            muted
            preload="auto"
            playsInline

            className="w-full h-full object-cover object-center "
          >
            <source src="/videos/bmw-intro.mp4" />
          </video>
        </div>
       <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20">
        <h1 id="attn-one"className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold">Expert Auto Repair.</h1>
        <h1 id="attn-two"className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> Quality Services.</h1>
       </div>

       <div className="absolute inset-0 flex flex-col justify-end items-end px-6 md:px-12 lg:px-20 pb-5 md:pb-30 lg:pb-5 overflow-x-clip">
        <h1 id="attn-three"className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold">Performance Upgrades.</h1> 
        <h1 id="attn-four"className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold"> General Maintenance.</h1> 


       </div>
      </section>
    </>
  );
};

export default Home;
