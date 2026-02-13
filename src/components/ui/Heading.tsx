import React from "react";

export type HeadingVariant = "main" | "sub";

export type HeadingProps = {
  title: string;
  variant?: HeadingVariant;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

const variantStyles: Record<HeadingVariant, string> = {
  main: "font-glamour font-[400] text-secondary",
  sub: "font-avenir font-[400] text-secondary",
};

const Heading: React.FC<HeadingProps> = ({
  title,
  variant = "main",
  as: Tag = variant === "main" ? "h1" : "h2",
  className = "",
}) => {
  return (
    <div>
      <Tag className={`${variantStyles[variant]} ${className}`}>{title}</Tag>
    </div>
  );
};

export default Heading;
