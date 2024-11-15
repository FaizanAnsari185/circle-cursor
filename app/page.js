"use client";
import { useState } from "react";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setMouse({ x: e.clientX, y: e.clientY });
  }
  return (
    <>
      <div onMouseMove={handleMouseMove} className="h-screen w-screen bg-black uppercase text-9xl text-white">expirience
        <div
          style={{
            top: mouse.y,
            left: mouse.x,
            transform: "translate(-50%, -50%)",
            transition: 'cubic-bezier(0.19, 1, 0.22, 1) 1s',
            mixBlendMode: "difference",
          }}
          className="h-[10px] w-[10px] bg-white rounded-full absolute z-50"
        ></div>
      </div>
    </>
  );
}
