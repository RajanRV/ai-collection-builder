import React from "react";

function HeadingComponent({ title, className = "" }) {
  return (
    <div>
      <h1 className={`font-glamour font-[400] text-secondary ${className}`}>
        {title}
      </h1>
    </div>
  );
}

export default HeadingComponent;
