"use client";
import { useState } from "react";
import Image from "next/image";

//ICONS
import DownArrow from "@/public/icons/Down-Arrow.svg";
const Qbox = ({ icon = ".", value = "", desc = "", active = "" }) => {
  const [isActive, setisActive] = useState(active === "true" || false);

  const buttonPress = () => {
    setisActive(!isActive);
    console.log(isActive);
  };

  const ActiveBox = isActive
    ? "h-38 transition-all duration-200"
    : "transition-all duration-200";
  const AppliedStyle = isActive
    ? "transition-all duration-200"
    : "hidden transition-all duration-200";

  const defaultBox =
    "h-18 bg-[#FFFDF3] mx-20 rounded-xl shadow my-4" + " " + ActiveBox;
  const defaultText =
    "text-sm font-normal text-amber-900 mx-17 -mt-3.5" + " " + AppliedStyle;

  return (
    <>
      <div className={defaultBox}>
        <div className="flex justify-between">
          <div className="flex py-6.5 px-7 gap-x-3.5">
            <div className="-mt-[0.5px]">
              <Image src={icon} alt="ic.$" width={29} height={29} />
            </div>
            <div>
              <p className="font-normal">{value || "value"}</p>
            </div>
          </div>
          <div className="mr-8 mt-4">
            <button onClick={buttonPress} className="mt-1 w-5 h-5">
              <Image src={DownArrow} alt="." width={15} height={15} />
            </button>
          </div>
        </div>
        <div className={defaultText}>{desc || "..."}</div>
      </div>
    </>
  );
};
export default Qbox;
