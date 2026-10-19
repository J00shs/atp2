import React, { use } from 'react'
import { useParams } from "react-router";
import { serviceInfo } from '../../../constants/index.js';

const ServicePage = () => {
    const {serviceId} = useParams();
    const service = serviceInfo.find((item) => item.id === serviceId);
 
  return (
    <div>
        <h1 className='color-white flex flex-row items-center pt-60 px-10 text-3xl sm:text-4xl md:text-4xl lg:text-5xl  '>{service.titleOne}</h1>
        <p>{service.p1}</p>
        <h1>{service.titleTwo}</h1>
        <p>{service.p2}</p>
        
        <h1>{service.titleThree}</h1>
        <p>{service.p3}</p>
    </div>
  )
}

export default ServicePage