"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import mentorImage from "@/public/pictures/mentor_moments.svg";
import networkingImage from "@/public/pictures/networking_spaces.svg";
import collaborationImage from "@/public/pictures/collaboration_opportunities.svg";
const Events = () => {
  return (
    <>
      <div className="w-full bg-amber-50" id="Events">
        <div className="py-18 max-sm:py-10 flex justify-center items-center">
          <p className="text-4xl max-sm:text-[20.15px] max-sm:text-center max-sm:mx-1 font-bold mb-4">
            Made For Dreamers Like You
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex max-sm:mx-5 justify-center items-center"
        >
          {" "}
          <Image
            src={mentorImage}
            alt="Picture of the author"
            width={293}
            height={266}
            className="max-sm:w-50 max-sm:h-35"
          />
        </motion.div>
        <div className="py-13 flex-1 justify-center items-center">
          <p className="text-center text-3xl max-sm:text-[22.2px] font-semibold">
            Mentor Moments
          </p>
          <p className="text-amber-800 font-medium max-sm:text-[11px] text-center mx-10 max-sm:mx-5 my-4">
            Connect with people ahead of you in your chosen industry, learn from
            the jouneys, gain valuable insights,{" "}
            <br className="max-sm:hidden" /> and build relationships that can
            inspire and guide your own path forward.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex max-sm:mx-5 justify-center items-center mt-35 max-sm:mt-5 mb-10 max-sm:mb-0"
        >
          {" "}
          <Image
            src={collaborationImage}
            alt="Picture of the author"
            width={530}
            height={286}
            className="max-sm:w-50"
          />
        </motion.div>
        <div className="py-13 flex-1 justify-center items-center">
          <p className="text-center text-3xl max-sm:mx-2 max-sm:text-[22.2px] font-semibold">
            Collaboration Opprtunities
          </p>
          <p className="text-amber-800 font-medium max-sm:text-[11px] text-center mx-30 max-sm:mx-5 my-4">
            Connect with other passionate younge creators, share ideas. and work
            together on projects that challenge your{" "}
            <br className="max-sm:hidden" /> creativity and expand your
            experoence. At Ideas Cafe, teamwork isn't just encouraged - it's the
            heart of how <br className="max-sm:hidden" /> great ideas come to
            life.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex max-sm:mx-5 justify-center items-center mt-35 max-sm:mt-5 mb-10 max-sm:mb-0"
        >
          {" "}
          <Image
            src={networkingImage}
            alt="Picture of the author"
            width={478}
            height={354}
            className="max-sm:w-50"
          />
        </motion.div>
        <div className="py-13 flex-1 justify-center items-center">
          <p className="text-center text-3xl max-sm:text-[22.2px] font-semibold">
            Networking Spaces
          </p>
          <p className="text-amber-800 font-medium text-center max-sm:text-[11px] mx-30 max-sm:mx-5 my-4">
            Meet and grow with like minded young people who want to create,
            innovate, and build together - sharing{" "}
            <br className="max-sm:hidden" /> ideas, collaborating on projects,a
            nd pushing each other to new heights in technology, design and{" "}
            <br className="max-sm:hidden" />
            entertainment. At ideas Cafe, every connection is a chance to learn,
            inspire and turnbold visions into reality.
          </p>
        </div>
      </div>
    </>
  );
};
export default Events;
