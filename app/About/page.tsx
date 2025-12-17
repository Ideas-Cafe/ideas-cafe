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
          <p className="text-4xl font-bold mb-4 animate-[slide-pop_2s_ease-in-out_1_alternate_forwards]">
            The Story Behind Ideas Cafe: How We're <br /> Creating Space for the
            Next Generation of <br /> Innovators
          </p>
          <p className="text-md font-normal mb-8 animate-[slide-pop_2s_ease-in-out_1_alternate_forwards]">
            Ideas Café is more than a community, it's a space where young people
            come together to explore the <br /> possibilities of technology,
            entertainment, and design and with sustainability in mind. We
            believe that the <br /> future belongs to those who dare to think
            differently, learn courageously, and create with purpose.
          </p>
          <Button
            value="Get to Know Us"
            icon={Right_Arrow}
            func={TestFunction}
            className="text-white bg-black"
          />
        </div>
      </div>
    </>
  );
};
export default About;
