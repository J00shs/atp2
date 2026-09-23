import { useState } from 'react'
import LoadingHero from './components/loadingHero'

import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <LoadingHero />
    </main>
  )
}

export default App
