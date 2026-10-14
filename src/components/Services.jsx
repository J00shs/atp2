import React from 'react'

const Services = () => {
  return (

<section id="services-main" className="bg-linear-to-r from-[#002E5D] via-[#002E5D] to-[#2774ae] py-20">

  <div
    id="services"
    className="
      flex flex-nowrap gap-6
      overflow-x-auto
      snap-x snap-mandatory
      px-6 md:px-12
      pb-6
    "
  >
    <div
      id="brake_services"
      className="
        shrink-0
        w-[85vw] sm:w-[400px]
        snap-center
        rounded-xl bg-white/10
        p-8 text-white
      "
    >
      <h2 className="text-3xl font-bold mb-4">
        Brakes
      </h2>
      <p>
        Our brake services ensure your vehicle's
        safety and reliability.
      </p>
    </div>

    <div
      id="engine_services"
      className="shrink-0 w-[85vw] sm:w-[400px] snap-center rounded-xl bg-white/10 p-8 text-white">
      <h2 className="text-3xl font-bold mb-4">
        Engine and Transmissions
      </h2>
      <p>
        Our skilled mechanics diagnose and repair
        engine and transmission issues.
      </p>


    </div>
    <div id="suspension_services" className="shrink-0 w-[85vw] sm:w-[400px] snap-center rounded-xl bg-white/10 p-8 text-white">
    <h2 id="suspension_text" className="text-3xl font-bold mb-4">Suspension</h2>
    <p>A well-maintained suspension system is crucial for a smooth and comfortable ride. Our suspension services include thorough inspections, repairs, and replacements of shocks, struts, and other components. Trust our experts to keep your vehicle stable and responsive, ensuring a safe and pleasant driving experience.</p>
    </div>

    <div id="tire_services"  className="shrink-0 w-[85vw] sm:w-[400px] snap-center rounded-xl bg-white/10 p-8 text-white">
               <h1 id="tires_text" className="text-3xl font-bold mb-4">Tires and Wheel Alignment</h1>
              <p>Proper tire and wheel alignment is essential for vehicle safety and performance. We offer precise alignment services to prevent uneven tire wear and improve handling. Our technicians also provide tire repairs, rotations, and replacements, ensuring your vehicle maintains optimal traction and stability on the road.</p>
    </div>



  </div>
</section>

    //     <div id="tire_services" className='bg-white/20 rounded-lg'>
    //           <h1 id="tires_text" className='text-4xl'>Tires and Wheel Alignment</h1>
    //           <p>Proper tire and wheel alignment is essential for vehicle safety and performance. We offer precise alignment services to prevent uneven tire wear and improve handling. Our technicians also provide tire repairs, rotations, and replacements, ensuring your vehicle maintains optimal traction and stability on the road.</p>
    //     </div>
    //     <div id="rimrepair_services" className='bg-white/20 rounded-lg'>
    //           <h1 id="rimrepair_text" className='text-4xl'>Rim Repairs and Powdercoating</h1>
    //           <p>Damaged rims can affect your vehicle's performance and aesthetics. Our rim repair services address bends, cracks, and other issues, restoring your rims to their original condition. We also offer powder coating services, providing a durable, high-quality finish that enhances the look of your wheels.</p>
    //     </div>
    //     </div>





    // </section>
  )
}

export default Services