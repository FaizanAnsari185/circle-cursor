"use client"
import MovingDot from "@/Components/MovingDot";
import { useState } from "react";

export default function Home() {
  const [hover, setHover] = useState(false);

  function ok() {
    setHover(!hover)
  }
  return (
    <>
      <div className="bg-black h-screen w-screen flex flex-col gap-52 justify-center items-center">
        <MovingDot hover={hover} />
        <h1 onMouseEnter={ok} className="uppercase text-9xl text-white">this is magic</h1>
      </div>
    </>
  );
}
