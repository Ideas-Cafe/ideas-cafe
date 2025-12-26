"use client";
import Qbox from "@/components/ui/Qbox";
import Button from "@/components/ui/Button";

//ICONS
import Stars from "@/public/icons/stars.svg";
import People from "@/public/icons/people.svg";
import Sheild from "@/public/icons/sheild.svg";
import Calender from "@/public/icons/calender.svg";
import Bolt from "@/public/icons/bolt.svg";
import Question from "@/public/icons/question.svg";
const Questions = () => {
  const QB = [
    {
      key: "01",
      value: "What is Ideas Cafe?",
      desc: "Ideas Cafe is a vibrant creative community designed for young people passionate about technology, entertainment, and design.We bring together aspiring creators, innovators, and dreamers to collaborate, learn from industry professionals, and exploe exciting possibilities in the digital and creative space.",
      icon: Stars,
      active: "true",
    },
    {
      key: "02",
      value: "Who can join the community?",
      desc: "...",
      icon: People,
      active: "false",
    },
    {
      key: "03",
      value: "Are there any membership fees?",
      desc: "...",
      icon: Sheild,
      active: "false",
    },
    {
      key: "04",
      value: "What kind of event do you organize?",
      desc: "...",
      icon: Calender,
      active: "false",
    },
    {
      key: "05",
      value: "How do i get started",
      desc: "...",
      icon: Bolt,
      active: "false",
    },
    {
      key: "06",
      value: "Can I collaborate with other members on projects?",
      desc: "...",
      icon: Question,
      active: "false",
    },
  ];
  return (
    <>
      <div className="w-full min-h-250 bg-amber-50 py-10">
        <div className="flex justify-center items-center">
          <div className="text-center space-y-1.5 my-10">
            <p className="text-3xl font-medium">Got Questions ?</p>
            <p className="text-sm max-sm:mx-5 font-normal text-amber-900">
              We've got answers. Find everything you need to know about joining
              and being part <br /> of Ideas Cafe community.
            </p>
          </div>
        </div>
        {QB.map((item) => (
          <Qbox
            key={item.key}
            icon={item.icon}
            value={item.value}
            desc={item.desc}
            active={item.active}
          />
        ))}
        <div className="flex justify-center items-center my-10">
          <div className="text-center space-y-4">
            <p>Still have questions? We'd love to hear from you! </p>
            <Button
              value="Get in Touch"
              className="bg-black text-yellow-50 max-sm:w-30 max-sm:h-13.5"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Questions;
