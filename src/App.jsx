import { useState } from 'react'
import LoadingHero from './components/loadingHero'

import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar';
import Home from './components/Home';
gsap.registerPlugin(ScrollTrigger, SplitText);

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
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
           <h1>1</h1>
            <h1>1</h1>
             <h1>1</h1>
              <h1>1</h1>
               <h1>1</h1>
               
                <h1>1</h1>
                 <h1>1</h1>
                  <h1>1</h1>
                   <h1>1</h1>
                    <h1>1</h1>
                     <h1>1</h1>
                      <h1>1</h1>
                       <h1>1</h1>
                        <h1>1</h1>
                         <h1>1</h1>
                          <h1>1</h1>
                           <h1>1</h1>
                            <h1>1</h1>
                             <h1>1</h1>
                              <h1>1</h1>
                               <h1>1</h1>
                                <h1>1</h1>
                                 <h1>1</h1>
                                  <h1>1</h1>
                                   <h1>1</h1>
                                    <h1>1</h1>
                                     <h1>1</h1>



      

  

    




        </>)}
    </main>
  )
}

export default App
