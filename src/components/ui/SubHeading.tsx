import React from "react";

export type SubHeadingProps = {
  title: string;
  className?: string;
};

const SubHeading: React.FC<SubHeadingProps> = ({ title, className = "" }) => {
  return (
    <div>
      <h2 className={`font-avenir font-[400] text-secondary ${className}`}>
        {title}
      </h2>
    </div>
  );
};

export default SubHeading;

