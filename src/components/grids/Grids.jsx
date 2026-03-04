import gsap from "gsap";
import { useState, useEffect, useRef } from "react";

export function Grids() {
  const gridRef = useRef([]);
  const [animate, setAnimate] = useState(false);
  gridRef.current = [];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "g") {
        e.preventDefault();
        setAnimate((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (gridRef.current.length === 0) return;
    {
      gsap.to(gridRef.current, {
        yPercent: animate ? "-100" : 0,
        duration: 2,
        ease: "expo.inOut",
        stagger: 0.01,
      });
    }
  }, [animate]);

  const addToRefs = (el) => {
    if (el && !gridRef.current.includes(el)) {
      gridRef.current.push(el);
    }
  };

  return (
    <div class="grid-cols-12 gap-5 container absolute z-1 opacity-10 inset-0 grid left-1/2 -translate-x-1/2 top-0 h-full w-full">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} ref={addToRefs} class="bg-gray-300"></div>
      ))}
    </div>
  );
}
