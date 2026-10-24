import React, { useRef } from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { services } from '/constants/index.js'
import { Link } from "react-router";

const Services = () => {
    const trackRef = useRef(null)
    const carRef = useRef(null)

    useGSAP(() => {
        const cards = document.querySelector("#service_overview")
        const section = document.querySelector("#card_wrapper")



        // TODO - fix scrolling issue
        const getDistance = () => Math.max(0, cards.scrollWidth - section.clientWidth) + 350;

        const tl = gsap.timeline();


        gsap.to(cards, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
                trigger: section,
                markers: true,
                //element, viewport
                start: "top top",
                pin: true,
                end: () => `+=${getDistance()}`,
                scrub: 1.5,
                invalidateOnRefresh: true,
                onEnter: () => gsap.to("#navigation-bar", {
                    opacity:0,
                    duration:0.1,
                }),
                onLeaveBack: () => gsap.to("#navigation-bar", {
                    opacity:1
                }),


            }


        })


    });


    return (
        <section id="card_wrapper" className='overflow-hidden'>
            <div className='flex justify-center'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-10'>Our Services</h1>
            </div>
            <div id="service_overview" className='flex w-max pb-10 gap-6 px-6 md:px-12 rounded-lg'>
                {services.map((service, index) => (
                    <div key={service.id} className='service-cards'>
                        <div id="service_content" className='relative'>
                            <img src={service.image_source} alt={service.alt_text} className='w-8 pb-2' />
                            <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
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
