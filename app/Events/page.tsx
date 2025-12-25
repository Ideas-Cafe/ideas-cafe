import Image from "next/image";
import mentorImage from "@/public/pictures/mentor_moments.svg";
import networkingImage from "@/public/pictures/networking_spaces.svg";
import collaborationImage from "@/public/pictures/collaboration_opportunities.svg";
const Events = () => {
  return (
    <>
      <div className="w-full bg-amber-50" id="Event">
        <div className="py-18 flex justify-center items-center">
          <p className="text-4xl max-sm:text-3xl max-sm:text-center font-bold mb-4">
            Made For Dreamers Like You
          </p>
        </div>
        <div className="flex max-sm:mx-5 justify-center items-center animate-[slide-pop_2s_ease-in-out_1_alternate_forwards]">
          {" "}
          <Image
            src={mentorImage}
            alt="Picture of the author"
            width={293}
            height={266}
          />
        </div>
        <div className="py-13 flex-1 justify-center items-center">
          <p className="text-center text-3xl max-sm:text-2xl font-semibold">
            Mentor Moments
          </p>
          <p className="text-amber-800 font-medium max-sm:text-sm text-center mx-10 max-sm:mx-5 my-4">
            Connect with people ahead of you in your chosen industry, learn from
            the jouneys, gain valuable insights, <br /> and build relationships
            that can inspire and guide your own path forward.
          </p>
        </div>
        <div className="flex max-sm:mx-5 justify-center items-center mt-35 max-sm:mt-5 mb-10 max-sm:mb-0 animate-[slide-pop_2s_ease-in-out_1_alternate_forwards]">
          {" "}
          <Image
            src={collaborationImage}
            alt="Picture of the author"
            width={530}
            height={286}
          />
        </div>
        <div className="py-13 flex-1 justify-center items-center">
          <p className="text-center text-3xl max-sm:text-2xl font-semibold">
            Collaboration Opprtunities
          </p>
          <p className="text-amber-800 font-medium max-sm:text-sm text-center mx-30 max-sm:mx-5 my-4">
            Connect with other passionate younge creators, share ideas. and work
            together on projects that challenge your <br /> creativity and
            expand your experoence. At Ideas Cafe, teamwork isn't just
            encouraged - it's the heart of how <br /> great ideas come to life.
          </p>
        </div>
        <div className="flex max-sm:mx-5 justify-center items-center mt-35 max-sm:mt-5 mb-10 max-sm:mb-0 animate-[slide-pop_2s_ease-in-out_1_alternate_forwards]">
          {" "}
          <Image
            src={networkingImage}
            alt="Picture of the author"
            width={478}
            height={354}
          />
        </div>
        <div className="py-13 flex-1 justify-center items-center">
          <p className="text-center text-3xl max-sm:text-2xl font-semibold">
            Networking Spaces
          </p>
          <p className="text-amber-800 font-medium text-center max-sm:text-sm mx-30 max-sm:mx-5 my-4">
            Meet and grow with like minded young people who want to create,
            innovate, and build together - sharing <br /> ideas, collaborating
            on projects,a nd pushing each other to new heights in technology,
            design and <br />
            entertainment. At ideas Cafe, every connection is a chance to learn,
            inspire and turnbold visions into reality.
          </p>
        </div>
      </div>
    </>
  );
};
export default Events;
