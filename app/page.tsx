import Button from "@/components/ui/Button";
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
        <div className="absolute inset-0 lg:backdrop-blur-md max-md:bg-black/20" />
        <div className="text-center space-y-2 text-amber-100 max-sm:-mt-8 animate-[slide-pop_2s_ease-in-out_1_alternate_forwards]">
          <p className="text-5xl font-bold mb-4 max-sm:mb-4.5 max-sm:text-[22.33px] max-sm:px-2 max-sm:font-bold max-sm:my-10">
            Ignite Your Passion. Shape <br className="max-sm:hidden" /> the
            Future
          </p>
          <p className="text-md font-normal mb-8 max-sm:mb-5.5 max-sm:mx-7 max-sm:text-[10px]">
            Where your minds shape the future of tech, design & entertainmen
            with. Join a <br className="max-sm:hidden" /> vibrant community of
            introverts, creators and dreamers
          </p>
          <Button
            value="Join the commuinity"
            className="whitespace-nowrap max-sm:w-40 max-sm:h-8 max-sm:px-5 max-sm:text-sm"
          />
        </div>
      </div>
    </>
  );
}
