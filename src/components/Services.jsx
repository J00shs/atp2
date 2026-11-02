import React, { useRef } from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { services } from '/constants/index.js'
import { Link } from "react-router";
import Models from './Models';

const Services = () => {
    const trackRef = useRef(null)
    const carRef = useRef(null)

    useGSAP(() => {
        const cards = document.querySelector("#service_overview")
        const section = document.querySelector("#card_wrapper")



        // TODO - fix scrolling issue
         const getDistance = () => Math.max(0, cards.scrollWidth - section.clientWidth);

        const tl = gsap.timeline();


        gsap.to(cards, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
                trigger: section,
                markers: false,
                //element, viewport
                start: "-=200 top",
                pin: true,
                end: () => `max`,
                scrub: 1,
                invalidateOnRefresh: true,
                // onEnter: () => gsap.to("#navigation-bar", {
                //     opacity:0,
                //     duration:0.1,
                // }),
                // onLeaveBack: () => gsap.to("#navigation-bar", {
                //     opacity:1
                // }),


            }


        })


    });


  return (
  <section id="card_wrapper" className="overflow-hidden" style={{viewTransitionName:"service_section"}}>
    <div className="px-6 pb-6 md:px-12">
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
        Our Services
      </h1>
      <p className="mt-2 text-base md:text-lg">Backed by a 6-month warranty</p>
    </div>

    <div id="service_overview" className="">
      {services.map((service) => (
        <div key={service.id} className="service-cards">
          <div id="service_content" className="relative">
            <img src={service.image_source} alt={service.alt_text} className="w-8 pb-2" />
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">{service.title}</h2>
            <p>{service.content}</p>
            <Link to={`/services/${service.id}`}>Read More</Link>
          </div>
        </div>
      ))}
    </div>
  </section>
)
}

export default Services
