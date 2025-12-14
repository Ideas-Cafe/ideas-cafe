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
          <p className="text-center text-4xl font-bold">
            Be Part of Something Bigger
          </p>
          <p className="text-center text-amber-800 font-medium mx-30 my-4">
            A space built for creators, innovators, and dreamers who believe in
            shaping the future through technology, design, and <br />{" "}
            creativity. At ideas Cafe, every idea matters, every cnnection
            counts, and every collaboration brings us closer to building <br />{" "}
            something extraordinary.
          </p>
        </div>
        <div className="flex mx-4 overflow-x-scroll overflow-y-hidde gap-x-6 **hide-scrollbar**">
          <Card icon={chip} color="bg-amber-500" />
          <Card icon={cinima} color="bg-blue-500" />
          <Card icon={art} color="bg-purple-500" />
          <Card icon={design} color="bg-green-500" />
        </div>
      </div>
    </>
  );
};
export default Community;
