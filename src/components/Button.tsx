import React from "react";

type ButtonProps = {
  children: string;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return (
    <div
      className={` bg-Button text-white flex items-center justify-center p-6 cursor-pointer hover:bg-[#D9D9D9] ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
