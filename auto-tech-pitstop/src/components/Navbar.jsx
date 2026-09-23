import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

import {navLinks} from '../../constants/index.js';

const Navbar = () => {

    useGSAP(() => {
        gsap.from("#logo", {
            ease: "power1.out",
            duration: 1.5,
            y: -200,
            opacity: 0})

    });
  return (
    <nav>
        <div className='flex justify-center items-center'>
             <img src="/images/atplogo.svg" alt="logo" id="logo" />
        </div>
        <ul id="nav-links" className='flex justify-center items-center gap-2'>
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>

    </nav>
  )
}

export default Navbar