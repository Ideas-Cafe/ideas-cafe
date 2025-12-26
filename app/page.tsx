import Image from "next/image";

export default function Home() {
  const bg_Image = "/pictures/Background3.png";
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
        <div className="absolute inset-0 max-md:backdrop-blur-md max-md:bg-black/40" />
        <div className="text-center space-y-2 text-amber-100 animate-[slide-pop_2s_ease-in-out_1_alternate_forwards]">
          <p className="text-5xl font-bold mb-4 max-sm:text-4xl max-sm:my-10">
            Ignite Your Passion. Shape <br className="max-sm:hidden" /> the
            Future
          </p>
          <p className="text-md font-normal mb-8 max-sm:mx-5 max-sm:text-sm ">
            Where your minds shape the future of tech, design & entertainmen
            with. Join a <br className="max-sm:hidden" /> vibrant community of
            introverts, creators and dreamers
          </p>
        </div>
      </div>
    </>
  );
}
