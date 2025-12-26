"use client";
import Image from "next/image";
const Button = ({
  value = "",
  func = () => {},
  icon = "",
  mobile = "",
  className = "",
}) => {
  const buttonClick = () => {
    func();
  };
  const defualtstyling =
    "px-7 h-8.5 max-sm:h-7 max-sm:w-7 text-center text-black rounded-4xl bg-amber-100 transition-all duration-300 hover:h-9 hover:scale-x-105";

  const mergedStyling = defualtstyling + " " + className;
  return (
    <>
      <button onClick={buttonClick} className={mergedStyling}>
        <div className="flex items-center gap-x-2">
          {value && (
            <p className={mobile === "true" ? "max-sm:-translate-x-3" : " "}>
              {value}
            </p>
          )}
          {icon && <Image src={icon} alt="" className="mt-0.5 w-4 h-4" />}
        </div>
      </button>
    </>
  );
};
export default Button;
