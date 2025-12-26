import Image from "next/image";
import PaperLogo from "@/public/icons/logo.svg";
const Logo = ({ className = "", font = "" }) => {
  const initialStyle = "w-4 h-4" + " " + className;
  const initialFont = "font-semibold max-sm:text-sm max-sm:hidden" + " " + font;
  return (
    <>
      <div className="flex gap-x-2">
        <div className="mt-1">
          <Image src={PaperLogo} alt="Idea Logo" className={initialStyle} />
        </div>
        <div>
          <p className={initialFont}>Ideas Cafe</p>
        </div>
      </div>
    </>
  );
};
export default Logo;
