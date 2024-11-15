"use client";
import React, { useEffect, useState } from "react";

const MovingDot = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        style={{
          top: mouse.y,
          left: mouse.x,
          transition: "cubic-bezier(0.19, 1, 0.22, 1) 1s"
        }}
        className="absolute z-50 bg-white h-2.5 w-2.5 transform -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference"
      ></div>
      
    </>
  );
};

export default MovingDot;
