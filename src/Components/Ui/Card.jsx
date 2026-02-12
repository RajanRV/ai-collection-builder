import React from "react";
import Badge from "./badge";
import { useNavigate } from "react-router-dom";

function Card({ icon, title, description, badge, path, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (path) navigate(path);
  };
  return (
    <div
      className="bg-white py-[18px] sm:py-[24px] pl-[16px] sm:pl-[28px] pr-[20px] cursor-pointer rounded-[4px] flex flex-col gap-[8px] sm:gap-[13px] border border-[#DEDEDE]"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-[6px] sm:gap-[10px] items-center">
          <img src={icon} alt="icon" className="h-[28px] sm:h-auto" />
          <h2 className="text-secondary text-[16px] sm:text-[20px] font-[800] font-avenir flex gap-[13px]">
            {title}
          </h2>
        </div>
        {badge && <Badge badge={badge} />}
      </div>

      <p className="text-secondary text-[14px] sm:text-[16px] font-[400] font-avenir">
        {description}
      </p>
    </div>
  );
}

export default Card;
