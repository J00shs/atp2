import { useState } from 'react'
import LoadingHero from './components/loadingHero'

import gsap from 'gsap';
import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Book_Now from './components/Book_Now';
import Services from './components/Services';
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

function App() {
  const [isLoading, setIsLoading] = useState(false); //Change to true for animation

  return (
    <main>
  
      {isLoading?(
        <LoadingHero onComplete={() => setIsLoading(false)} />
      ):
      (
        <>
          <Navbar />
          <Home />
          <Book_Now />
          <Services/>
          

          
        



      

  

    




        </>)}
    </main>
  )
}

export default App
