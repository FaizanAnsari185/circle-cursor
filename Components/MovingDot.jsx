"use client";
import React, { useEffect, useState } from "react";

const MovingDot = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const textRef = React.useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });

      // Check if mouse is over the text
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        setHover(isInside);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
          top: mouse.y,
          left: mouse.x,
          height: hover ? "30px" : "10px",
          width: hover ? "30px" : "10px",
          transition: "cubic-bezier(0.19, 1, 0.22, 1) 1s", // Smooth transition
        }}
        className="absolute z-50 bg-white h-2.5 w-2.5 transform -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference"
      ></div>
      <h1 ref={textRef} className="uppercase text-9xl text-white">
        this is magic
      </h1>
    </>
  );
};

export default MovingDot;
