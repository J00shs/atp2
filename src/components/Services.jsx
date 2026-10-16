import React, { useRef } from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {services} from '/constants/index.js'
const Services = () => {
    const trackRef = useRef(null)
    const carRef = useRef(null)

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

        tl.from([".service-card",carRef.current],{
            opacity:0,
            stagger:0.2
        })
        const handleScroll = () => {
            const currentScroll = scroller.scrollLeft;
            const direction = currentScroll - previousScroll;

            const maxScroll = scroller.scrollWidth - scroller.clientWidth //scrollwidth = total width of content, //clientwidth = visible width of the container
            const progress = maxScroll > 0 ? currentScroll / maxScroll : 0; //calculate % that user has scrolled
            const travelWidth = trackRef.current.clientWidth - carRef.current.clientWidth //Determine how far the car can travel
            const carPosition = progress * travelWidth //Determines how far the car can move

            gsap.set(carRef.current,{
                x:carPosition
            })

            if (direction !== 0) {
             gsap.to(".service-card", {
                rotation: direction > 0 ? -2 : 2,
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
                duration: 0.3,
                ease: "elastic.out(1, 0.5)",
                overwrite: "auto"
            });
        };
        scroller.addEventListener("scroll", handleScroll, { passive: true });
        scroller.addEventListener("scrollend", handleScrollEnd);
    });


  return (

<section id="services-main" className="bg-linear-to-r from-[#002E5D] via-[#002E5D] to-[#2774ae] py-20">

  <div
    id="services"
    className="
     
      flex flex-nowrap gap-6
      overflow-x-auto overflow-y-hidden
      snap-x snap-mandatory
      py-4
      px-6 md:px-12
      pb-6
      
    ">
        {services.map((service, index) =>(
            <div key={service.id} id={service.id}
            className="service-card shrink-0 self-start w-[85vw] sm:w-[400px] lg:w-[450px] xl:w-[500px] snap-center rounded-xl bg-white/10 p-8 text-white">
            <div className='service-content relative'>
                <img src={service.image_source} alt={service.alt_text} className='w-8 pb-2'/>
                <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
                <p>{service.content}</p>
                <a href="#">Read More</a>
               
            </div>
            </div>
            
            

        ))}
    


  </div >
  <div ref={trackRef} className="relative w-full h-16 sm:h-24 md:h-32">
  <img
    
    ref={carRef}
    src="/images/m3gtr.png"
    alt=""
    className="
      absolute left-0 bottom-0
      w-30 sm:w-38 md:w-43 lg:w-58
      h-auto
    "
  />
</div>
</section>
  )
}

export default Services