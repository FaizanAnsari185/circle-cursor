import MovingDot from "@/Components/MovingDot";

export default function Home() {
  return (
    <>
      <div className="bg-black h-screen w-screen">
        <MovingDot />
        <h1 className="uppercase text-center text-9xl text-white">this is magic</h1>
      </div>
    </>
  );
}
