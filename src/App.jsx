import { useState, useLayoutEffect } from 'react'
import LoadingHero from './components/loadingHero'

import gsap from 'gsap';
import { ScrollTrigger, SplitText, ScrollSmoother, DrawSVGPlugin } from "gsap/all";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Book_Now from './components/Book_Now';
import Services from './components/Services';
import ServicePage from './components/Pages/ServicePage';
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother, DrawSVGPlugin);
import { Routes, Route } from "react-router";
import { ViewTransition } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true); //Change to true for animation

  return (
    <main>
      
      {isLoading ? (
        <LoadingHero onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Routes>
          
            <Route
              path="/"
              element={
                <>
                 
                  <Home />

                  <Book_Now />
                  <Services />
          
                 

                </>
                
              }
            />
            
            <Route
              path="/services/:serviceId"
              element={<ViewTransition enter="page-enter" exit="page-exit" default="none"><ServicePage /></ViewTransition>}
            />
           
          </Routes>
         



        </>
      )}
    </main>
  );
}

export default App
