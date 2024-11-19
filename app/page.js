import MovingDot from "@/Components/MovingDot";

export default function Home() {
  return (
    <>
      <div className="bg-black h-screen w-screen flex flex-col gap-10 justify-center items-center">
        <MovingDot />
      </div>
    </>
  );
}
