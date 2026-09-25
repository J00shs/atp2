import { useState } from 'react'
import LoadingHero from './components/loadingHero'

import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar';
import Home from './components/Home';
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main>
      {isLoading?(
        <LoadingHero onComplete={() => setIsLoading(true)} />
      ):
      (
        <>
          <Navbar />
          <Home />
        </>)}
    </main>
  )
}

export default App
