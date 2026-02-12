import React from "react";

function SubHeading({ title, className = "" }) {
  return (
    <div>
      <h1 className={`font-Avenir font-[400] text-secondary ${className}`}>
        {title}
      </h1>
    </div>
  );
}

export default SubHeading;
