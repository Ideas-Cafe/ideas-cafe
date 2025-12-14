import Logo from "@/components/ui/Logo";
const Footer = () => {
  return (
    <>
      <div className="w-full text-white bg-black p-10 border-t-[0.1px] border-gray-800">
        <div className="">
          {" "}
          <div className="h-8">
            <Logo font="font-bold text-xl" className="w-5 h-5" />
          </div>
          <div className="flex h-35 justify-center items-center">
            <table className="">
              <thead>
                <tr>
                  <th className="px-25 py-1">Quick Links</th>
                  <th className="px-25 py-1">Socials</th>
                  <th className="px-25 py-1">Emails</th>
                </tr>
              </thead>
              <tbody className="font-light text-gray-300">
                <tr>
                  <td className="px-25 py-1">Home</td>
                  <td className="px-25 py-1">Discord</td>
                  <td className="px-25 py-1">Ideascafe@gmail.com</td>
                </tr>
                <tr>
                  <td className="px-25 py-1">About</td>
                  <td className="px-25 py-1">X</td>
                </tr>
                <tr>
                  <td className="px-25 py-1">Events</td>
                  <td className="px-25 py-1">YouTube</td>
                </tr>
                <tr>
                  <td className="px-25 py-1">Community</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-black text-white w-full h-15 border-t-[0.1px] border-gray-800">
        <p className="text-center text-sm font-light text-gray-400">
          Designed Carfully by: Nabil Danesi 2025
        </p>
      </div>
    </>
  );
};
export default Footer;
