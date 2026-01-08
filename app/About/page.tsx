"use client";
import { motion } from "framer-motion";
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
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl max-sm:mx-2 max-sm:text-[22.2px] font-bold mb-4"
          >
            The Story Behind Ideas Cafe: How We're{" "}
            <br className="max-sm:hidden" /> Creating Space for the Next
            Generation of <br className="max-sm:hidden" /> Innovators
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-md max-sm:mx-4 max-sm:text-[10px] font-normal mb-8 max-sm:my-8"
          >
            Ideas Café is more than a community, it's a space where young people
            come together to explore the <br className="max-sm:hidden" />{" "}
            possibilities of technology, entertainment, and design and with
            sustainability in mind. We believe that the{" "}
            <br className="max-sm:hidden" /> future belongs to those who dare to
            think differently, learn courageously, and create with purpose.
          </motion.p>
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
