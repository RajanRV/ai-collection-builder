import React from "react";

export type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onKeyDown,
  placeholder = "",
  className = "",
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;

