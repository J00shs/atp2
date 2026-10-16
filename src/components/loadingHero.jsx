
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const LoadingHero = ({ onComplete }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const subTitle = SplitText.create("#subtitle", {
      type: "chars"
    });

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      }
    });

    tl.from("#bmw", {
      x: "-100vw",
      duration: 0.7,
      ease: "power3.out"
    })
    .from("#logo", {
      x: -100,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.2")
    .from("#infiniti", {
      x: "-100vw",
      duration: 0.7,
      ease: "power3.out"
    }, "-=0.2")
    .from(subTitle.chars, {
      x: -30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.01
    }, "-=0.2")
    .to("#hero-title", {
      x: "110vw",
      duration: 1,
      ease: "power3.in"
    })
    .to(subTitle.chars, {
      x: "100vw",
      duration: 0.6,
      ease: "power3.in",
      stagger: 0.005
    });

    return () => {
      subTitle.revert();
    };
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="
        flex min-h-[100svh] w-full
        flex-col items-center justify-center
        overflow-x-clip
        px-4 sm:px-6 md:px-10
        font-bold text-white
      "
    >
      {/* Cars and logo */}
      <div
        id="hero-title"
        className="
          flex w-full max-w-5xl
          items-center justify-center
          gap-1 sm:gap-3 md:gap-6 lg:gap-8
        "
      >
        <img
          id="infiniti"
          src="/images/infinitiq50.png"
          alt="Infiniti Q50"
          className="
            w-[25%] max-w-55
            min-w-0 h-auto
            object-contain
          "
        />

        <img
          id="logo"
          src="/images/atplogo.svg"
          alt="Auto Tech Pitstop"
          className="
            w-[45%] max-w-100
            min-w-0 h-auto
            object-contain
          "
        />

        <img
          id="bmw"
          src="/images/bmwm3.png"
          alt="BMW M3"
          className="
            w-[25%] max-w-50
            min-w-0 h-auto
            object-contain
          "
        />
      </div>

      {/* Subtitle */}
      <h2
        id="subtitle"
        className="
          mt-5
          max-w-full
          text-center
          text-sm sm:text-lg md:text-xl lg:text-2xl
          leading-relaxed
        "
      >
        Proudly Serving Long Island and Queens
      </h2>
    </div>
  );
};

export default LoadingHero;
