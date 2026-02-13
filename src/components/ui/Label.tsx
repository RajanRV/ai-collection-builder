import React from "react";

export type LabelProps = {
  title: string;
  className?: string;
};

const Label: React.FC<LabelProps> = ({ title, className = "" }) => {
  return (
    <div className={className}>
      <p className="text-gray font-[500] font-avenir">{title}</p>
    </div>
  );
};

export default Label;

