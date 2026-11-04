import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Models = () => {


    useGSAP(() => {

        let mm = gsap.matchMedia();

        function horizontalLoop(items, config) {
            items = gsap.utils.toArray(items);
            config = config || {};
            let tl = gsap.timeline({
                repeat: config.repeat,
                paused: config.paused,
                defaults: { ease: "none" },
                onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
            }),
                length = items.length,
                startX = items[0].offsetLeft,
                times = [],
                widths = [],
                xPercents = [],
                curIndex = 0,
                pixelsPerSecond = (config.speed || 1) * 100,
                snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
                totalWidth,
                curX,
                distanceToStart,
                distanceToLoop,
                item,
                i;
            gsap.set(items, {
                // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
                xPercent: (i, el) => {
                    let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
                    xPercents[i] = snap(
                        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
                        gsap.getProperty(el, "xPercent")
                    );
                    return xPercents[i];
                },
            });
            gsap.set(items, { x: 0 });
            totalWidth =
                items[length - 1].offsetLeft +
                (xPercents[length - 1] / 100) * widths[length - 1] -
                startX +
                items[length - 1].offsetWidth *
                gsap.getProperty(items[length - 1], "scaleX") +
                (parseFloat(config.paddingRight) || 0);
            for (i = 0; i < length; i++) {
                item = items[i];
                curX = (xPercents[i] / 100) * widths[i];
                distanceToStart = item.offsetLeft + curX - startX;
                distanceToLoop =
                    distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
                tl.to(
                    item,
                    {
                        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                        duration: distanceToLoop / pixelsPerSecond,
                    },
                    0
                )
                    .fromTo(
                        item,
                        {
                            xPercent: snap(
                                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                            ),
                        },
                        {
                            xPercent: xPercents[i],
                            duration:
                                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                            immediateRender: false,
                        },
                        distanceToLoop / pixelsPerSecond
                    )
                    .add("label" + i, distanceToStart / pixelsPerSecond);
                times[i] = distanceToStart / pixelsPerSecond;
            }
            function toIndex(index, vars) {
                vars = vars || {};
                Math.abs(index - curIndex) > length / 2 &&
                    (index += index > curIndex ? -length : length); // always go in the shortest direction
                let newIndex = gsap.utils.wrap(0, length, index),
                    time = times[newIndex];
                if (time > tl.time() !== index > curIndex) {
                    // if we're wrapping the timeline's playhead, make the proper adjustments
                    vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
                    time += tl.duration() * (index > curIndex ? 1 : -1);
                }
                curIndex = newIndex;
                vars.overwrite = true;
                return tl.tweenTo(time, vars);
            }
            tl.next = (vars) => toIndex(curIndex + 1, vars);
            tl.previous = (vars) => toIndex(curIndex - 1, vars);
            tl.current = () => curIndex;
            tl.toIndex = (index, vars) => toIndex(index, vars);
            tl.times = times;
            tl.progress(1, true).progress(0, true); // pre-render for performance
            if (config.reversed) {
                tl.vars.onReverseComplete();
                tl.reverse();
            }
            return tl;
        }

        const tl_two = gsap.timeline();

        gsap.to("#models",{
            // duration:1.5,
            clipPath: "ellipse(150% 150% at 50% 100%)",
            scrollTrigger:{
                trigger:"#models",
                // start:"top-=300 center"
                start:"top-=215 top",
                 end:"+=500",
                scrub:true,
                markers:true,
            }
        })

        // tl_two.to("#models",{
        //     // clipPath: "ellipse(150% 150% at 50% 100%)",
        //     yPercent:0
        // })

        // gsap.fromTo('#models',{
        //     ease:"none",
        //     scrollTrigger:{
        //         start:"top-=450 center",
        //         trigger:"#models",
        //         end:"top-=100 center",
        //         scrub:true,
        //         markers:true,
        //     }
        // },{

        // })


        const logos = gsap.utils.toArray(".car_logo")

        mm.add("(min-width: 800px)", () => {
            horizontalLoop(logos, {
                repeat: -1,
            })
        });

        mm.add("(max-width: 799px)", () => {
            horizontalLoop(logos,{
                repeat:-1,
                speed: 1,
            })
        });





    });
    return (
        <section id="models" className='' style={{ viewTransitionName: "models_section" }}>
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start'>
                <h1 className=' text-white text-2xl md:text-5xl font-bold p-8'>We Service A Variety Of Makes and Models</h1>
                <p className="px-9 -mt-2 text-base md:text-xl">From American to Japanese. From sedan to SUV.</p>
            </div>
            <div className='model_caro'>
                <img className="car_logo" src="/car_logos/bmw.png" alt="bmw logo" />
                <img className="car_logo" src="/car_logos/mercedes-benz.png" alt="Mercedes logo" />
                <img className="car_logo" src="/car_logos/infiniti.png" alt="infiniti logo" />
                <img className="car_logo" src="/car_logos/toyota.svg" alt="toyota logo" />
                <img className="car_logo" src="/car_logos/volkswagen.png" alt="vw logo" />
                <img className="car_logo" src="/car_logos/audi.png" alt="audi logo" />
                <img className="car_logo" src="/car_logos/honda.png" alt="honda logo" />
                <img className="car_logo" src="/car_logos/dodge.svg" alt="dodge logo" />
            </div>
        </section>
    )
}

export default Models