import React, { use } from 'react'
import { useParams } from "react-router";
import { serviceInfo } from '../../../constants/index.js';

//TODO - Make everything get bigger for larger screens

const ServicePage = () => {
    const {serviceId} = useParams();
    const service = serviceInfo.find((item) => item.id === serviceId);
 
  return (
    <div>
        <div id="service_div" className="flex flex-col lg:flex-row pt-50 lg:pt-55 px-5 gap-10">
          <div className="flex flex-col gap-6">
          <h1 id="title_one" className='font-bold text-2xl lg:text-5xl '>{service.titleOne}</h1>
          <p id="service_p1" className="lg:text-lg w-full max-w-xl">{service.p1}</p>
          <ul id="service_items">
            {service.list_one.map((s)=>
             <li>&#8226;{s}</li>
            )}
          </ul>
          </div>
            <img id="img_one" src="/images/brakes_image.png" alt="brakes" className='self-center lg:ml-auto w-full max-w-80 h-60 object-cover rounded-lg'></img> 
        </div>

        <div id="service_div_two" className="flex flex-col lg:flex-row-reverse pt-15 px-5">
           <div className="flex flex-col gap-6 lg:items-end">
            <h1 className='font-bold text-2xl lg:text-5xl'>{service.titleTwo}</h1>
            <p id="service_p2" className="lg:text-lg w-full max-w-xl" >{service.p2}</p>
            <ul id="service_items_two" className='self-start'>
            {service.list_two.map((s)=>
             <li>&#8226;{s}</li>
            )}
          </ul>
           </div>
           <img id="img_one" src="/images/brakes_image.png" alt="brakes" className='lg:self-start mr-auto w-full max-w-80 h-60 object-cover rounded-lg'></img> 
        </div>

         
        


        {/* <h1>{service.titleTwo}</h1>
        <p>{service.p2}</p>
    
        <h1>{service.titleThree}</h1>
        <p>{service.p3}</p> */}

    </div>
  )
}

export default ServicePage


//  <div className="flex flex-row gap-10 px-10 pt-50 ">
//             <h1 className="
//             text-white text-2xl self-start
//             md:text-3xl 
//             lg:text-5xl ">{service.titleOne}</h1>
//             <img src="/images/brakes_image.png" alt="brakes" className="
//             self-center object-cover max-w-lg w-75 h-90
//             md:self-end
//             lg:w-full lg:h-90 
//             rounded-2xl"/>

//              <p className=' 
//              w-full
//              max-w-2xl
//              self-center
//              md:text-2xl
//              lg:max-w-2xl lg:text-3xl lg:self-start
//              '>{service.p1}</p>
//         </div>