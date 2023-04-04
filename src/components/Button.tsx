import React from "react";

type ButtonProps = {
  children: string;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return <div className={` bg-Button text-white ${className}`}>{children}</div>;
};

export default Button;
