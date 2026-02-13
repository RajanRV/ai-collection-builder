import React from "react";

export type MainHeadingProps = {
  title: string;
  className?: string;
};

const MainHeading: React.FC<MainHeadingProps> = ({ title, className = "" }) => {
  return (
    <div>
      <h1 className={`font-glamour font-[400] text-secondary ${className}`}>
        {title}
      </h1>
    </div>
  );
};

export default MainHeading;

