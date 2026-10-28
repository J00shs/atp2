import React, { use } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { useParams } from "react-router";
import { serviceInfo, serviceInfo1 } from '../../../constants/index.js';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceInfo.find((item) => item.id === serviceId);

  const serviceContent = serviceInfo1.find((item) => item.id === serviceId);



  const menuItems = serviceContent.cards.map((card, key) =>
    <div id={`service_card_${key + 1}`} key={key} className='service_cards absolute mt-15' style={{ zIndex: 10 - (key + 1) }}>
      <h1 className='service_cards_h1'>{card.title}</h1>
      <p className='service_cards_text'>{card.text}</p>
      <ul className='service_cards_text'>{card.list.map((s, key) =>
        <li key={key}>{s}</li>
      )}
      </ul>
    </div>
  )


  useGSAP(() => {


    const drive = gsap.timeline();
    const wordTL = gsap.timeline();

    let split = SplitText.create(".service_cards_h1", { type: "chars" })
    let test = SplitText.create(".service_cards_text", {type:"lines"})

    wordTL.from(split.chars, {
      duration: 0.2,
      ease: "back",
      y: -80,
      stagger: 0.007,
      delay:0.8
    });

    wordTL.from(test.lines, {
      duration: 0.2,
      yPercent: 100,
      opacity:0,
      stagger:0.1
    })




    const cars = ["#car_one", "#car_two", "#car_three", "#car_four"];


    for (const car in cars) {
      const car_direction = Math.random() >= 0.5 ? 180 : 0
      gsap.set(cars[car], {
        rotationY: () => (car_direction),
        x: () => {
          if (car_direction == 180) {
            return "100vw"
          }
          return "-100vw"
        }
      })
      gsap.to(cars[car], {
        x: () => {
          if (car_direction == 180) {
            return "-100vw"
          }
          return "100vw"

        },
        duration: gsap.utils.random(4.5, 7),
        delay: gsap.utils.random(0.5, 1.5),
        repeat: -1,
        yoyo: true,
        ease: "none",
        onRepeat: () => {
          if ((gsap.getProperty(cars[car], "rotationY") == 0)) {
            gsap.set(cars[car], { rotationY: 180 })
          } else {
            gsap.set(cars[car], { rotationY: 0 })
          }
        }
      })
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page_content",
        pin: true,
        scrub: 0.8,
        start: "top top",
        end: "+=1000",
        markers: true,
        invalidateOnRefresh:true,
        onUpdate: (self) => { console.log("progress: ", self.progress) },
        onEnterBack: () => {
          gsap.to(["#shop_image", "#header", "#service_btn"], {
            autoAlpha: 0,
          })
          for (const car in cars) {
            gsap.to([cars[car]], {
              autoAlpha: 0
            })
          }
          drive.pause(0)
        },
        onLeave: () => {
          gsap.to(["#shop_image", "#header", "#service_btn"], {
            autoAlpha: 1,
          })
          for (const car in cars) {
            gsap.to([cars[car]], {
              autoAlpha: 1
            })
          }
          drive.play()
        }
      }
    })

    const cards = [".service_cards"];
    tl.to(cards, {
      xPercent: -150,
      ease: "none",
      stagger: 1,
    })



  });

  return (
    <div id="page_content" className='w-full h-dvh overflow-hidden'>

      <div id="content_section" className='relative flex h-full items-center justify-center'>
        {menuItems}

        <div className="progress-bar-wrapper">
          <div className="flex progress w-full justify-start items-start h-full overflow-hidden break-all rounded-full bg-black text-white"></div>
        </div>



        <div id="scene" className='relative'>
          <h1 id="header" className='invisible text-2xl sm:text-4xl md:text-5xl text-center px-4'>Schedule an Appointment Today!</h1>
          <img src="/images/shop2.png" alt="shop image" id="shop_image" className='invisible' />
          <img src="/images/m3gtr.png" alt="shop image" id="car_one" className="invisible" />
          <img src="/images/e63.png" alt="Mercedes E63" id="car_two" className='invisible' />
          <img src="/images/bmwm3.png" alt="BMW M3" id="car_three" className='invisible' />
          <img src="/images/infinitiq50.png" alt="Infiniti" id="car_four" className='invisible' />
        </div>


      </div>
      <div className="relative flex justify-center items-center">
        <button id="service_btn" className='absolute invisible bottom-22'>Book Now</button>
      </div>
    </div>

  )
}
export default ServicePage