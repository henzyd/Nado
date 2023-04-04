import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className=" border-r border-NavBar border-l p-4 font-bold text-2xl">
        Logo
      </div>
    </Link>
  );
};

export default Logo;
