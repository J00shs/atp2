

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
import { useState, useEffect, useRef } from 'react';
import React from 'react'

const Book_Now = () => {

  const buttonRef = useRef(null);
  const leftRef = useRef(null);  
  const rightRef = useRef(null); 


  function handleHover(){
    // alert("Hovering");
   }
  
  function handleLeave(){
    // alert("Mouse left")
  }

  // TODO - Better flag animation? Background/Modern button style
  
useGSAP(() => {
  const button = buttonRef.current;
  const flags = [leftRef.current, rightRef.current]
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#book_sec",
      start: "top 90%",
      end: "+=300",
      scrub: true
    }
  });

  tl.from("#book_sec", {
    opacity:0,
    duration: 1,
    ease:"power3",
  }, 0);

  console.log(button.getBoundingClientRect())
 

  // const buttonHover = gsap.timeline({
  //   paused:true
  // });
  // buttonHover.fromTo(flags,{
  //   scale:0

  // },{
  //   scale:1,
  //   duration:0.2,
  //   ease:"power1.in"
  // })

  // const handleMouseHover= () =>{
  //   buttonHover.play();
  // }

  // const handleMouseLeave = () =>{
  //   buttonHover.reverse();
  // }
  


  // button.addEventListener("mouseenter", handleMouseHover);
  // button.addEventListener("mouseleave", handleMouseLeave);

  //  return () => {
  //   button.removeEventListener("mouseenter", handleMouseHover);
  //   button.removeEventListener("mouseleave", handleMouseLeave);
  // };

}, []);

  
  return (

    
<section id="appointment" className="bg-linear-to-r from-[#002E5D] via-[#002E5D] to-[#2774ae] backdrop-blur-lg w-full overflow-x-clip">

  <div className="flex justify-center pt-10 px-8 mt-32 sm:mt-40 md:mt-48 lg:mt-60 pb-16">

  
    <div id="book_sec" className="relative w-fit">


      {/* <img
        ref={rightRef}
        src="/images/checkered-flag.png"
        alt=""
        className="
          pointer-events-none
          absolute
          -top-10 -right-8
          sm:-top-14 sm:-right-12
          md:-top-16 md:-right-16
          lg:-top-19 lg:-right-22
          w-14 h-14
          sm:w-18 sm:h-18
          md:w-22 md:h-22
          lg:w-25 lg:h-25
          object-contain
        "
      />

      <img
        ref={leftRef}
        src="/images/checkered-flag-flipped.png"
        alt=""
        className="
          pointer-events-none
          absolute
          -top-10 -left-8
          sm:-top-14 sm:-left-12
          md:-top-16 md:-left-16
          lg:-top-19 lg:-left-22
          w-14 h-14
          sm:w-18 sm:h-18
          md:w-22 md:h-22
          lg:w-25 lg:h-25
          object-contain
        "
      /> */}

      
<button
  ref={buttonRef}
  id="book_btn"
  className="
    relative z-10
    whitespace-nowrap
    rounded-xl

    bg-white/10
    backdrop-blur-[8px]

    px-7 py-3
    sm:px-10
    md:px-12 md:py-4
    lg:px-15


    text-lg sm:text-xl md:text-2xl lg:text-3xl
    font-semibold text-white

  "
>
  Book Now
</button>


    </div>
  </div>
</section>

  )
}

export default Book_Now

// Idea - when the user hovers over the "Book Now button", two flags will come up the button

// 
