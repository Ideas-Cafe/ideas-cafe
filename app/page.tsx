import Image from "next/image";

export default function Home() {
  const bg_Image = "/pictures/Background.png";
  return (
    <>
      <div
        className={`flex justify-center items-center h-screen w-full`}
        style={{
          background: `url(${bg_Image})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        id="Home"
      >
        <div className="text-center space-y-2 text-amber-100 animate-[slide-pop_2s_ease-in-out_1_alternate_forwards]">
          <p className="text-5xl font-bold mb-4">
            Ignite Your Passion. Shape <br /> the Future
          </p>
          <p className="text-md font-normal mb-8">
            Where your minds shape the future of tech, design & entertainmen
            with. Join a <br /> vibrant community of introverts, creators and
            dreamers
          </p>
        </div>
      </div>
    </>
  );
}
