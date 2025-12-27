"use client";
import Button from "@/components/ui/Button";
import Right_Arrow from "@/public/icons/Right-Arrow.svg";

const About = () => {
  const TestFunction = () => {
    console.log("Button Clicked");
  };
  return (
    <>
      <div
        className="flex justify-center items-center h-screen w-full bg-[#E8C1EE]"
        id="About"
      >
        <div className="text-center space-y-2 text-black ">
          <p className="text-4xl max-sm:mx-2 max-sm:text-[22.2px] font-bold mb-4 animate-[slide-pop_2s_ease-in-out_1_alternate_forwards]">
            The Story Behind Ideas Cafe: How We're{" "}
            <br className="max-sm:hidden" /> Creating Space for the Next
            Generation of <br className="max-sm:hidden" /> Innovators
          </p>
          <p className="text-md max-sm:mx-4 max-sm:text-[10px] font-normal mb-8 max-sm:my-8 animate-[slide-pop_2s_ease-in-out_1_alternate_forwards]">
            Ideas Café is more than a community, it's a space where young people
            come together to explore the <br className="max-sm:hidden" />{" "}
            possibilities of technology, entertainment, and design and with
            sustainability in mind. We believe that the{" "}
            <br className="max-sm:hidden" /> future belongs to those who dare to
            think differently, learn courageously, and create with purpose.
          </p>
          <Button
            value="Know Us"
            icon={Right_Arrow}
            func={TestFunction}
            className="whitespace-nowrap text-white bg-black max-sm:w-35 max-sm:h-8 max-sm:-mt-1"
          />
        </div>
      </div>
    </>
  );
};
export default About;
