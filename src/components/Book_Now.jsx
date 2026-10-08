

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

import React from 'react'

const Book_Now = () => {
  return (
    <section
      id="appointment"
      className="flex h-screen items-center justify-center"
    >
      {/* Button and flags container */}
      <div className="relative">

        {/* Left checkered flag */}
        <img
          src="/images/checkered-flag-flipped.png"
          alt=""
          className="pointer-events-none absolute bottom-full right-full w-20 md:w-28 translate-x-8 translate-y-8"
        />

        {/* Right checkered flag */}
        <img
          src="/images/checkered-flag.png"
          alt=""
          className="pointer-events-none absolute bottom-full left-full w-20 md:w-28 -translate-x-8 translate-y-8"
        />

        {/* Book Now button */}
        <button
          id="book_btn"
          className="relative z-10 rounded-lg bg-black px-8 py-4 text-3xl font-bold text-white transition-colors duration-300 hover:bg-blue-600"
        >
          Book Now
        </button>

      </div>
    </section>
  )
}

export default Book_Now
