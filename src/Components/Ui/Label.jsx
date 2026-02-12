import React from "react";

function Label({ title, className = "" }) {
  return (
    <div className={className}>
      <p className="text-gray font-[500] font-avenir">{title}</p>
    </div>
  );
}

export default Label;
