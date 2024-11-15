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
          position: "absolute",
          zIndex: 1000,
          width: "10px",
          height: "10px",
          backgroundColor: "black",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          transition: "cubic-bezier(0.19, 1, 0.22, 1) 1s",
        }}
      ></div>
    </>
  );
};

export default MovingDot;
