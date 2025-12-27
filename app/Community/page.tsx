import Card from "@/components/ui/Card";

//ICONS
import chip from "@/public/icons/chip.svg";
import art from "@/public/icons/art.svg";
import cinima from "@/public/icons/cinima.svg";
import design from "@/public/icons/design.svg";

const Community = () => {
  return (
    <>
      <div className="bg-amber-50 h-170" id="Community">
        <div className="py-13 flex-1 justify-center items-center">
          <p className="text-center text-4xl max-sm:text-[22.2px] max-sm:mx-1 font-bold">
            Be Part of Something Bigger
          </p>
          <p className="text-center text-amber-800 font-medium mx-30 max-sm:mx-3 max-sm:text-[12px] my-4 max-sm:my-12">
            A space built for creators, innovators, and dreamers who believe in
            shaping the future through technology, design, and{" "}
            <br className="max-sm:hidden" /> creativity. At ideas Cafe, every
            idea matters, every cnnection counts, and every collaboration brings
            us closer to building <br className="max-sm:hidden" /> something
            extraordinary.
          </p>
        </div>
        <div className="flex w-full px-4 max-sm:px-2 max-sm:-mt-13 overflow-x-scroll overflow-y-hidden gap-x-6 max-sm:gap-x-3 hide-scrollbar">
          <div>
            <Card icon={chip} color="bg-amber-500" />
          </div>
          <div>
            <Card icon={cinima} color="bg-blue-500" />
          </div>
          <div>
            <Card icon={art} color="bg-purple-500" />
          </div>
          <div>
            <Card icon={design} color="bg-green-500" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Community;
