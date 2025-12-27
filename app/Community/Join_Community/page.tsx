import Button from "@/components/ui/Button";
const JoinCommunity = () => {
  const bg_Image = "/pictures/Background2.png";
  return (
    <>
      <div
        className={`flex justify-center items-center h-screen w-full`}
        style={{
          background: `url(${bg_Image})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-amber-50 text-center space-y-4 max-sm:space-y-8">
          <p className="text-4xl max-sm:text-[22.2px] max-sm:mx-1 font-bold text-center">
            Create, Connect. Redefine what's possible.
          </p>
          <p className="mx-30 max-sm:text-[12px] max-sm:mx-5">
            Connect with passionate creators innovators and visionaries who are
            pushing boundaries, sharing ideas, and{" "}
            <br className="max-sm:hidden" /> building what's next. Whether
            you're just starting out or already making waves, this is where
            growth meets <br className="max-sm:hidden" /> opportunity - and
            where your hourney truly begins.{" "}
          </p>
          <Button
            value="Let's Build Together"
            className="whitespace-nowrap font-medium my-3 text-sm max-sm:w-40 max-sm:h-8 max-sm:px-5"
          />
        </div>
      </div>
    </>
  );
};
export default JoinCommunity;
