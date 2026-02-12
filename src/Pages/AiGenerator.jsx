import React, { useState } from "react";
import HeadingComponent from "../Components/Ui/MainHeading";
import Input from "../Components/Ui/Input";
import Badge from "../Components/Ui/badge";
import AiGenerator_Badge from "../Data/AiGenerator_Badge.json";
import SubHeading from "../Components/Ui/SubHeading";
import { useEffect } from "react";

function AiGenerator() {
  const [gift, setGift] = useState("");
  const [badgeInput, setBadgeInput] = useState("");

  useEffect(() => {
    setBadgeInput(
      "Here is an example of a group gift collection for a wedding gift",
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
    //             <img
    //               src="./icons/cross.svg"
    //               alt="clear"
    //               className="w-[16px] h-[16px]"
    //             />
    //           </button>
    //         )}
    //       </div>
    //     </div>

    //     {/* Loader Section */}
    //     <div className="flex-1 flex items-center justify-center">
    //       <img src="./icons/Loader.svg" alt="loader" />
    //     </div>
    //   </div>
    // </div>

    <div className="bg-[#F7F7F7] flex flex-col">
      <div className="min-h-screen w-[90%] max-w-[1366px] mx-auto flex flex-col">
        {/* Input Section  */}
        <div className="mt-[67px] relative w-[90%] lg:w-[625px] mx-auto">
          <Input
            value={gift}
            onChange={(e) => setGift(e.target.value)}
            placeholder="I’m collecting a group gift for..."
            className="w-full h-[50px] px-[8px] pr-[40px] py-[13px] bg-white border border-[#DEDEDE] rounded-[4px] focus:outline-none"
          />

          {gift && (
            <button
              onClick={() => setGift("")}
              className="absolute right-[15px] top-1/2 -translate-y-1/2"
            >
              <img
                src="./icons/cross.svg"
                alt="clear"
                className="w-[16px] h-[16px]"
              />
            </button>
          )}
        </div>

        {/* badge */}
        <div className="mt-[33px] px-[16px] py-[12px] mx-auto">
          {badgeInput}
        </div>
      </div>
    </div>
  );
}

export default AiGenerator;
