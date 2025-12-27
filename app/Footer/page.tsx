import Logo from "@/components/ui/Logo";
const Footer = () => {
  return (
    <>
      <div className="w-full text-white bg-black p-10 max-sm:p-5 border-t-[0.1px] border-gray-800">
        <div className="">
          {" "}
          <div className="h-8">
            <Logo
              font="font-bold text-xl"
              className="w-5 h-5 max-sm:w-4 max-sm:h-4"
            />
          </div>
          <div className="flex max-sm:pl-10 max-sm:pr-5 h-35 max-sm:h-30 justify-center items-center">
            <table className="">
              <thead>
                <tr>
                  <th className="max-sm:text-sm px-25 py-1 max-sm:px-0 max-sm:py-0.5 text-start">
                    <span className="ml-3">Links</span>
                  </th>
                  <th className="max-sm:text-sm px-25 py-1 max-sm:px-0 max-sm:py-0.5">
                    Socials
                  </th>
                  <th className="max-sm:text-sm px-25 py-1 max-sm:px-3 max-sm:py-0.5 text-start">
                    Emails
                  </th>
                </tr>
              </thead>
              <tbody className="font-light text-gray-300">
                <tr>
                  <td className="max-sm:text-xs px-25 py-1 max-sm:px-3 max-sm:py-0.5">
                    Home
                  </td>
                  <td className="max-sm:text-xs px-25 py-1 max-sm:px-0 max-sm:py-0.5">
                    Discord
                  </td>
                  <td className="max-sm:text-xs px-25 py-1 max-sm:px-3 max-sm:py-0.5">
                    Ideascafe
                    <br />
                    @gmail.com
                  </td>
                </tr>
                <tr>
                  <td className="max-sm:text-xs px-25 py-1 max-sm:px-3 max-sm:py-0.5">
                    About
                  </td>
                  <td className="max-sm:text-xs px-25 py-1 max-sm:px-0 max-sm:py-0.5">
                    X
                  </td>
                </tr>
                <tr>
                  <td className="max-sm:text-xs px-25 py-1 max-sm:px-3 max-sm:py-0.5">
                    Events
                  </td>
                  <td className="max-sm:text-xs px-25 py-1 max-sm:px-0 max-sm:py-0.5">
                    YouTube
                  </td>
                </tr>
                <tr>
                  <td className="max-sm:text-xs px-25 py-1 max-sm:px-3 max-sm:py-0.5">
                    Community
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-black text-white w-full h-15 max-sm:h-10 border-t-[0.1px] border-gray-800">
        <p className="max-sm:text-xs text-center text-sm font-light text-gray-400">
          Designed Carfully by: Nabil Danesi 2025
        </p>
      </div>
    </>
  );
};
export default Footer;
