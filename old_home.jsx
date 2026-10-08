import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { useRef } from 'react';
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({maxWidth: 767});

  const startValue = isMobile ? "top 50%" : "center 60%";
	const endValue = isMobile ? "120% top" : "bottom top";

  useGSAP(() =>{

  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:"video",
      start: startValue,
      end: endValue,
      scrub: true,
      pin:true,
    },
  });

  videoRef.current.onloadedmetadata = () =>{
    tl.to(videoRef.current, {
      currentTime: videoRef.current.duration,
  });
};
  },[]);


  return (
    <>
    <section id="hero-home">
    <div className="video absolute inset-0">
    <video ref={videoRef} muted preload="auto" playsInline>
        <source src="/videos/bmw-intro.mp4"/>
    </video>
    </div>
    {/* <div className="overflow-hidden">
    <img src='/images/checkered-flag.png' alt="left-flag" className="left-flag"></img>
    <h1>Hello</h1>
    <img src='/images/checkered-flag-flipped.png' alt="right-flag" className="right-flag"></img>
    </div> */}



    </section>
    </>
  )
}

export default Home