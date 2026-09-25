import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { useState, useEffect, useRef } from 'react';

import {navLinks} from '../../constants/index.js';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navRef = useRef(null);
    useEffect(() => {
        const handleOutsideClick = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
            setActiveDropdown(null);
        }
        };

        if (activeDropdown) {
        document.addEventListener('click', handleOutsideClick);
        }

        return () => {
        document.removeEventListener('click', handleOutsideClick);
        };
    }, [activeDropdown]);

    const handleLinkClick = (e, link) => {
        if (link.subLinks) {
        e.preventDefault();
        setActiveDropdown(activeDropdown === link.id ? null : link.id);
        }
    };


    useGSAP(() => {
        gsap.from("#logo", {
            ease: "power1.out",
            duration: 1.5,
            y: -200,
            opacity: 0})
        gsap.from("#nav-links",{
                ease:"power1.in",
                y:200,
                opacity:0,
                duration:1.4
        })
        // Hover animation for navbar elements
        gsap.utils.toArray(".nav-link").forEach(element =>{
            element.addEventListener("mousemove", (e)=>{
                const rect = element.getBoundingClientRect()
                const dx = e.clientX -  (rect.x + (rect.width/2));
                const dy = e.clientY - (rect.y + (rect.height /2));
                const dist = Math.sqrt(dx*dx + dy*dy);
                if(dist < 120){
                    const pull = (120-dist )/120;
                    gsap.to(element, { x: dx * pull * 0.4, y: dy * pull * 0.4 });
                }
            })

            element.addEventListener("mouseleave", (e)=>{
                gsap.to(element, {
                    x:0,
                    y:0,
                    duration:0.3,
                    ease:"power2.out",
                    overwrite: true
                })
            })
        })
         

    });
  return (
    <nav ref={navRef}>
        <div className='flex justify-center items-center'>
             <img src="/images/atplogo.svg" alt="logo" id="logo" />
        </div>
        <ul id="nav-links">
                {navLinks.map((link)=>(
                    <li key={link.id} className="nav-link relative px-2 py-1 group ">
                        <a href={`#${link.id}`}
                        onClick={(e) => handleLinkClick(e, link)}
                        >{link.title}</a>
                        {/* If link has sub-links, render it */}
                        {link.subLinks &&(
                            <ul id="navbar-sublinks" className={activeDropdown === link.id ? 'open' : ''}>
                                {link.subLinks.map((subLink) => (
                                    <li key={subLink.id}
                                    onClick={() => setActiveDropdown(null)}
                                    >
                                        <a href={`#${subLink.id}`}>{subLink.title}</a>
                                    </li>
                                    
                                ))}
                            </ul>
                        )
                        }
                       <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <rect className="stroke-white" width="100%" height="100%" fill="none" rx="20"></rect>
                        </svg>
                    </li>
                ))}
        </ul>
    </nav>
  )
}

export default Navbar