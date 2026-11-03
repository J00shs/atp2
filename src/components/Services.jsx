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
        const cards = document.querySelector("#service_overview") //scroll container
        const section = document.querySelector("#card_wrapper") //scroll section

        console.log(cards.offsetWidth)

        // TODO - fix scrolling issue
         const getDistance = ()=> {
           return cards.offsetWidth - section.clientWidth;
         }

        const tl = gsap.timeline();


        gsap.to(cards, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
                trigger: section,
                markers: true,
                //element, viewport
                start: "top-=250 top",
                pin: true,
                end: () => `+=${getDistance()}`,
                scrub: 1,
                anticipatePin: 1,
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
            <img src={service.image_source} alt={service.alt_text} className="w-10 pb-3 lg:w-14" />
            <h2 id="service_title_home">{service.title}</h2>
            <p id="service_p">{service.content}</p>
            <Link id="service_link" to={`/services/${service.id}`}>Read More</Link>
          </div>
        </div>
      ))}
    </div>
  </section>
)
}

export default Services
