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
        <div className="text-amber-50 text-center space-y-4">
          <p className="text-4xl max-sm:text-2xl max-sm:mx-2 font-bold text-center">
            Create, Connect. Redefine what's possible.
          </p>
          <p className="mx-30 max-sm:mx-5">
            Connect with passionate creators innovators and visionaries who are
            pushing boundaries, sharing ideas, and <br /> building what's next.
            Whether you're just starting out or already making waves, this is
            where growth meets <br /> opportunity - and where your hourney truly
            begins.{" "}
          </p>
          <Button
            value="Let's Build Together"
            className="font-medium my-3 text-sm max-sm:w-37 max-sm:h-12"
          />
        </div>
      </div>
    </>
  );
};
export default JoinCommunity;
