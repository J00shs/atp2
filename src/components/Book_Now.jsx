

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
import { useState, useEffect, useRef } from 'react';
import React from 'react'

const Book_Now = () => {

  const buttonRef = useRef(null);
  const gradientRef = useRef(null);
  const borderRef = useRef(null);

  // TODO - Better flag animation? Background/Modern button style

  useGSAP(() => {
    const button = buttonRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#book_sec",
        start: "top 90%",
        end: "+=300",
        scrub: true,
        refreshPriority: 0
      }
    })

    gsap.fromTo(borderRef.current, {
      attr: { "stroke-dashoffset": 0 }
    }, {
      attr: { "stroke-dashoffset": -100 },
      duration: 5,
      ease: "none",
      repeat: -1
    });

    ScrollTrigger.refresh()
    console.log(button.getBoundingClientRect())


  }, []);


  return (


    <section id="appointment" className="bg-linear-to-r from-[#002E5D] via-[#002E5D] to-[#2774ae]  rounded-t-4xl w-full overflow-x-clip">

      <div className="flex justify-center pt-10 px-8 pb-10">
        <div id="book_sec" className="relative w-fit">
          <button ref={buttonRef} id="book_btn" className="relative z-10 overflow-hidden whitespace-nowrap rounded-xl backdrop-blur-[8px] 
      px-7 py-3 sm:px-10 md:px-12 md:py-4 lg:px-15 
      text-lg
      sm:text-xl md:text-5xl lg:text-3xl 
      font-semibold text-white">


            <svg
              viewBox="0 0 240 70"
              className="pointer-events-none absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  ref={gradientRef}
                  id="buttonGradient"
                  gradientUnits='userSpaceOnUse'
                  x1="0%"
                  y1="0%"
                  x2="236"
                  y2="70"
                >
                  <stop offset="0%" stopColor="#dee6ea" />
                  <stop offset="20%" stopColor="#cbd2df" />
                  <stop offset="40%" stopColor="#b8bfce" />
                  <stop offset="60%" stopColor="#a5aebc" />
                  <stop offset="80%" stopColor="#929eab" />
                  <stop offset="100%" stopColor="#8090a1" />
                </linearGradient>
              </defs>

              <rect
                ref={borderRef}
                x="2"
                y="1"
                width="236"
                height="67"
                rx="12"
                fill="none"
                stroke="url(#buttonGradient)"
                strokeWidth="1"
                pathLength="100"
                strokeDasharray="15 35"
              />
            </svg>

            <span className="relative z-10">
              Book Now
            </span>
          </button>
        </div>
      </div>
  
    </section>

  )
}

export default Book_Now

// Idea - when the user hovers over the "Book Now button", two flags will come up the button

// 
