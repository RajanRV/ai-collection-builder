import React from "react";
import MainHeading from "../Components/Ui/MainHeading";
import Label from "../Components/Ui/Label";
import Categorydata from "../Data/Dashboard_Collection.json";
import Fundraiserdata from "../Data/Dashboard_Fundraiser.json";
import Card from "../Components/Ui/Card";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <section className="bg-[#F7F7F7] min-h-screen">
      <div className="pt-[16px] sm:pt-[30px] lg:pt-[53px] max-w-[1366px] w-[93%] mx-auto">
        {/* Main Heading  */}
        <MainHeading
          title="What would you like to build today?"
          className="text-[24px] sm:text-[30px] lg:text-[40px]"
        />

        {/* Collection Cards */}
        <Label
          title="COLLECTION"
          className="mt-[25px] sm:mt-[39px] text-[14px] sm:text-[18px]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[12px] sm:gap-[24px] mt-[12px] mb-[30px] sm:mb-[62px]">
          {Categorydata.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              badge={item.badge}
              path={item.path}
            />
          ))}
        </div>

        {/* Fundraiser Heading */}
        <div className="flex gap-[6px]">
          <Label title="FUNDRAISER" className="text-[14px] sm:text-[18px]" />
          <div className="flex gap-[3px] items-center">
            <img
              src="/icons/Question.svg"
              alt="Question"
              className="h-[20px] w-[20px] sm:w-[auto] sm:h-auto m-auto"
            />
            <a
              href="#"
              className="text-[#257F91] font-avenir text-[14px] sm:text-[18px] font-400 cursor-pointer"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Fundraiser Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[12px] sm:gap-[24px] mt-[12px] sm:mt-[25px] mb-[62px]">
          {Fundraiserdata.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              badge={item.badge}
              path={item.path}
            />
          ))}
        </div>

        {/* only for test ai generator page */}
        <Link to="/ai-generator">Ai Generator</Link>
      </div>
    </section>
  );
}

export default Dashboard;
