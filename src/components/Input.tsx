import React from "react";

type InputProps = {
  type?: string;
  className?: string;
  placeholder?: string;
};

const Input = ({ type, className, placeholder }: InputProps) => {
  return (
    <input
      className={` outline-0 p-4 ${className}`}
      type={`${type || "text"}`}
      placeholder={`${placeholder || "Lorem Ipsum"}`}
    />
  );
};

export default Input;
