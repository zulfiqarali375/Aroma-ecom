import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const slides = [
  "/images/slide-01.jpg",
  "/images/slide-02.jpg",
  "/images/slide-03.jpg"
];

const HeroSection = () => {
  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();
  const [current, setCurrent] = useState(0);

  // Animate only once on component mount
  useEffect(() => {
    const tl = gsap.timeline();
  
    tl.fromTo(
      textRef1.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        textRef2.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5" // Starts before the previous ends (overlap)
      )
      .fromTo(
        textRef3.current,
        { y: 100, opacity: 0, rotate: 5 },
        { y: 0, opacity: 1, rotate: 0, duration: 1, ease: "back.out(1.7)" },
        "-=0.4"
      );
  }, []);

  // Slide change every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="w-full bg-cover bg-center flex items-center transition-all duration-1000"
      style={{ backgroundImage: `url(${slides[current]})`, height: 600 }}
    >
      <div  className="md:w-1/2 mobile:ml-2 tablet:ml-10 desktop:ml-10 laptop:ml-20 text-center md:text-left">
        <p ref={textRef1} className="text-lg text-gray-700  mb-2">Men Collection 2025</p>
        <h1 ref={textRef2} className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          NEW ARRIVALS
        </h1>
        <button ref={textRef3} className="bg-indigo-500 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-indigo-600 transition">
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
