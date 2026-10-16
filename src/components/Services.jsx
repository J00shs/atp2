import React from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {services} from '/constants/index.js'
const Services = () => {

    useGSAP(() =>{
        const scroller = document.querySelector("#services");
        let previousScroll = scroller.scrollLeft;

        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#services",
                markers:true,
                start:"top 80%",
                toggleActions: "play none none reverse",
            }
        })

        tl.from(".service-card",{
            opacity:0,
            stagger:0.2
        })
        const handleScroll = () => {
            const currentScroll = scroller.scrollLeft;
            const direction = currentScroll - previousScroll;

            if (direction !== 0) {
             gsap.to(".service-card", {
                rotation: direction > 0 ? -5 : 5,
                duration: 0.15,
                ease: "power2.out",
                overwrite: "auto"
            });
        }
            previousScroll = currentScroll;
        };
        const handleScrollEnd = () => {
            gsap.to(".service-card", {
                rotation: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.5)",
                overwrite: "auto"
            });
        };
        scroller.addEventListener("scroll", handleScroll, { passive: true });
        scroller.addEventListener("scrollend", handleScrollEnd);
    });


  return (

<section id="services-main" className="bg-linear-to-r from-[#002E5D] via-[#002E5D] to-[#2774ae]  py-20">

  <div
    id="services"
    className="
      flex flex-nowrap gap-6
      overflow-x-auto
      snap-x snap-mandatory
      py-4
      px-6 md:px-12
      pb-6
    ">
        {services.map((service) =>(
            <div key={service.id} id={service.id}
            className="service-card shrink-0  w-[85vw] sm:w-[400px] snap-center rounded-xl bg-white/10 p-8 text-white">
            <div className='service-content'>
                  {/* Change this */}
                <img src="/images/infinitiq50.png" className="relative w-25"></img>  
                <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
                <p>{service.content}</p>
            </div>
            </div>
        ))}
    


  </div>
</section>
  )
}

export default Services