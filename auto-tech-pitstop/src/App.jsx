import { useState } from 'react'
import LoadingHero from './components/loadingHero'

import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <main>
       {/* If showNav is true, then render navBar */}
      {showNav && <Navbar />}
      {/* This is saying: */}
      {/* Here's a function, keep it and call it when you're done. */}
      <LoadingHero onComplete={() => setShowNav(true)}/>
    </main>
  )
}

export default App
