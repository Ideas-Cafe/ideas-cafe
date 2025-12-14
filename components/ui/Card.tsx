import Button from "./Button";
import Image from "next/image";
const Card = ({ color = "", title = "", description = "", icon = "" }) => {
  return (
    <>
      <div className={`rounded-3xl p-5 w-84 h-90 ${color} space-y-5`}>
        <div className="flex mt-4 justify-center items-center w-14 h-14 shadow rounded-2xl">
          <Image src={icon} alt="No icon." width={28} height={28} />
        </div>
        <div className={`text-2xl font-bold text-white`}>
          {title || "Title"}
        </div>
        <div className="text-white font-light h-25 overflow-hidden -mt-1">
          {description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut quo adipisci voluptates sed error consequatur voluptatem, dolores nam optio cum aliquid beatae, quod magnam atqueaut nulla! Aperiam, ex."}
        </div>
        <Button
          value="Join Community"
          className={`bg-white w-68 shadow ${color}`}
        />
      </div>
    </>
  );
};
export default Card;
