import React from "react";

export type BadgeProps = {
  badge: string;
  onClick?: (badge: string) => void;
};

const Badge: React.FC<BadgeProps> = ({ badge, onClick }) => {
  return (
    <div onClick={() => onClick?.(badge)} className="cursor-pointer">
      <span className="bg-[#CBEAEE] text-[ #1D6371] text-[12px] sm:text-[14px] font-[400] font-avenir px-[8px] sm:px-[16px] py-[4px] sm:py-[8px] rounded-[20px] sm:rounded-[40px]">
        {badge}
      </span>
    </div>
  );
};

export default Badge;

