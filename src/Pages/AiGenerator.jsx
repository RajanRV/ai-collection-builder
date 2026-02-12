import React from "react";
import HeadingComponent from "../Components/Ui/MainHeading";

function AiGenerator() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeadingComponent
        title="Hi Molly, I’ll help you get started!"
        className="text-[24px] sm:text-[30px] lg:text-[40px]"
      />
      <HeadingComponent title="Tell us about the group gift you're collecting for:" />
    </div>
  );
}

export default AiGenerator;
