import React from "react";

function Badge({ badge }) {
  return (
    <div>
      <span className="bg-[#afb9ba] text-[#1D6371] text-[12px] sm:text-[14px] font-[400] font-avenir px-[8px] sm:px-[16px] py-[4px] sm:py-[8px] rounded-[20px] sm:rounded-[40px]">
        {badge}
      </span>
    </div>
  );
}

export default Badge;
