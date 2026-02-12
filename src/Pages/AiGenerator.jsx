import React, { useState } from "react";
import HeadingComponent from "../Components/Ui/MainHeading";
import Input from "../Components/Ui/Input";
import Badge from "../Components/Ui/badge";
import AiGenerator_Badge from "../Data/AiGenerator_Badge.json";
import SubHeading from "../Components/Ui/SubHeading";
import { useEffect } from "react";
import Flower from "../assets/images/Flower.png";
import HandHeart from "../assets/icons/HandHeart.svg";
import cross from "../assets/icons/cross.svg";
import Loader1 from "../assets/icons/Loader.svg";

function AiGenerator() {
  const [gift, setGift] = useState("");
  const [badgeInput, setBadgeInput] = useState("");
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(Flower);
  }, []);

  useEffect(() => {
    setBadgeInput(
      "Here is an example of a group gift collection for a wedding gift",
    );
  }, []);

  useEffect(() => {
    setHeading("Wedding Gift Donation Help");
  }, []);
  useEffect(() => {
    setSubHeading(
      "I’d appreciate your help in giving the couple a special gift for their big day! Any contribution you can make would be wonderful.",
    );
  }, []);

  return (
    //  {/* Gift page main Section */}

    // <div className="bg-[#F7F7F7]">
    //   <div className="flex flex-col justify-center min-h-screen items-center m-auto max-w-[1366px] w-[93%]">
    //
    //      {/* Heading Section */}
    //     <HeadingComponent
    //       title="Hi Molly, I’ll help you get started!"
    //       className="text-[24px] sm:text-[30px] lg:text-[40px] items-center text-center"
    //     />
    //     <SubHeading
    //       title="Tell us about the group gift you're collecting for:"
    //       className="text-[16px] sm:text-[20px] mt-[10px] sm:mt-[17px] items-center text-center"
    //     />

    //       {/* Input Section */}
    //     <Input
    //       value={gift}
    //       onChange={(e) => setGift(e.target.value)}
    //       placeholder="I’m collecting a group gift for..."
    //       className="w-[90%] lg:w-[625px] h-[50px] px-[8px] py-[13px] mx-auto bg-white mt-[30px] sm:mt-[46px] focus:outline-none border border-[#DEDEDE] rounded-[4px] "
    //     />

    //       {/* Badge Section */}
    //     <div className="flex flex-wrap mt-[12px] sm:mt-[28px] gap-[12px] items-center justify-center">
    //       {AiGenerator_Badge.map((item) => (
    //         <Badge key={item.id} badge={item.badge} />
    //       ))}
    //     </div>
    //   </div>
    // </div>

    //   {/* logo with input Section */}
    // <div className="bg-[#F7F7F7] min-h-screen flex flex-col">
    //   <div className="max-w-[1366px] w-[93%] mx-auto flex flex-col flex-1">
    //     {/* Input Section  */}
    //     <div className="flex justify-center">
    //       <div className="mt-[67px] relative w-[90%] lg:w-[625px] mx-auto">
    //         <Input
    //           value={gift}
    //           onChange={(e) => setGift(e.target.value)}
    //           placeholder="I’m collecting a group gift for..."
    //           className="w-full h-[50px] px-[8px] pr-[40px] py-[13px] bg-white border border-[#DEDEDE] rounded-[4px] focus:outline-none"
    //         />

    //         {gift && (
    //           <button
    //             onClick={() => setGift("")}
    //             className="absolute right-[15px] top-1/2 -translate-y-1/2"
    //           >
    //             <img src={cross} alt="clear" className="w-[16px] h-[16px]" />
    //           </button>
    //         )}
    //       </div>
    //     </div>

    //     {/* Loader Section */}
    //     <div className="flex-1 flex items-center justify-center">
    //       <img src={Loader1} alt="loader" />
    //     </div>
    //   </div>
    // </div>

    //card section
    <div className="bg-[#F7F7F7] flex flex-col">
      <div className="min-h-screen w-[90%] max-w-[1366px] mx-auto flex flex-col flex-1">
        {/* Input Section  */}
        <div className="flex justify-center">
          <div className=" mt-[16px] sm:mt-[67px] relative w-[90%] lg:w-[625px] mx-auto">
            <Input
              value={gift}
              onChange={(e) => setGift(e.target.value)}
              placeholder="I’m collecting a group gift for..."
              className="w-full h-[50px] px-[8px] pr-[40px] py-[13px] bg-white border border-[#DEDEDE] rounded-[4px] focus:outline-none"
            />

            {gift && (
              <button
                type="button"
                onClick={() => setGift("")}
                className="absolute right-[15px] top-1/2 -translate-y-1/2"
              >
                <img src={cross} alt="clear" className="w-[16px] h-[16px]" />
              </button>
            )}
          </div>
        </div>

        {/* badge */}
        <div className="mt-[16px] sm:mt-[33px] px-[16px] py-[12px] mx-auto font-Avenir bg-secondaryBadgeText text-secondary text-[14px] sm:text-[16px] font-[500] rounded-[8px]">
          {badgeInput}
        </div>

        {/* Loader Section */}
        <div className="mt-[27px] max-w-[863px] w-full mx-auto bg-white rounded-t-[10px] shadow-[0px_2px_6px_1px_#00000026]">
          <div className="relative rounded-[10px] overflow-hidden">
            <img
              src={image}
              alt="image"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full p-[19px] flex justify-end gap-[14px] bg-white">
              <button
                type="button"
                className="rounded-[4px] px-[32px] py-[10px] xl:text-base text-sm border border-lightGray text-gray bg-white"
              >
                Preview
              </button>

              <button
                type="button"
                className="bg-[#F36D36] rounded-[4px] px-[32px] py-[10px] xl:text-base text-sm text-white"
              >
                Try this out
              </button>
            </div>
          </div>

          <div className="px-[24px] py-[32px]">
            <HeadingComponent
              title={heading}
              className="text-[24px] sm:text-[30px] lg:text-[45px]"
            />
            <div className="mt-[16px]">
              <SubHeading
                title="Hey everyone!"
                className="text-[16px] sm:text-[18px] leading-normal"
              />
              <SubHeading
                title={subHeading}
                className="text-[16px] sm:text-[18px] leading-normal"
              />
            </div>
          </div>
        </div>
        <div className=" mt-[20px] max-w-[863px] w-full mx-auto py-[30px] bg-white items-center flex justify-center gap-[12px] shadow-[0px_2px_6px_1px_#00000026] mb-[97px]">
          <img src={HandHeart} alt="image" />
          <h2
            className="font-[800] font-avenir text-[#257F91] text-[16px] sm:text-[18px]
    "
          >
            Add custom donation
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AiGenerator;
