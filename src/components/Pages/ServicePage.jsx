import React, { use } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { useParams } from "react-router";
import { serviceInfo } from '../../../constants/index.js';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
//TODO - Change background color to night theme. Racing cars 
const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceInfo.find((item) => item.id === serviceId);

  useGSAP(() => {
    let sections = gsap.utils.toArray("#service_card");
    console.log(sections)

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:"#page_content",
        pin:true, 
        scrub: 0.5,
        start: "top top",
        end: "+=1000",
        markers: true,
        onEnterBack: () => gsap.to("#shop_image",{
          autoAlpha:0,
        }),
        onLeave: () => gsap.to("#shop_image",{
          autoAlpha:1,
        })
      }
    })

    tl.to("#service_card_one",{
      xPercent:-150,
      ease:"none"
    })
    tl.to("#service_card_two",{
      xPercent: -150,
      ease:"none"
    })

  });
  return (
    <div id="page_content" className='w-full h-dvh overflow-hidden'>
      <div id="content_section" className='relative flex h-full items-center justify-center'>
          <div id="service_card_one" className="service_cards absolute z-11 mt-15">
            <h1 className='service_cards_h1'>{service.titleOne}</h1>
            <p className="service_cards_text">{service.p1}</p>   {/* w-full, max-w-4xl help with paragraph sizing */}
            <ul className='service_cards_text'>
              {service.list_one.map((s, index) =>
                <li key={index}>&#8226;{s}</li>
              )}
            </ul>
          </div>

          <div id="service_card_two" className="service_cards absolute z-10">
            <h1 className='service_cards_h1'>{service.titleTwo}</h1>
            <p className="service_cards_text">{service.p2}</p>
            <ul className='service_cards_text'>
              {service.list_two.map((s, index) =>
                <li key={index}>&#8226;{s}</li>
              )}
            </ul>
          </div>
           <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center px-4'>Schedule an Appointment Now</h1>
           <img src="/images/shop2.png" alt="shop image" id="shop_image" className="invisible absolute inset-x-0 mx-auto top-[55%] h-auto w-[90%] max-w-4xl max-h-[40dvh] object-contain sm:w-[80%] md:w-[70%] lg:w-[60%]" />
      </div>
    </div>

  )
}

export default ServicePage