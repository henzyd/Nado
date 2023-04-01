import React from "react";

type ButtonProps = {
  children: string;
};

const Button = ({ children }: ButtonProps) => {
  return <div>{children}</div>;
};

export default Button;
