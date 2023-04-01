import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navData = [
    {
      id: 1,
      name: "Buy",
      link: "/buy",
    },
    {
      id: 2,
      name: "Sell",
      link: "/sell",
    },
  ];
  return (
    <div id="NavBar" className=" w-full flex justify-between items-center">
      <Logo />

      <div>
        {navData.map((item) => (
          <NavLink key={item.id} to={item.link}>
            {item.name}
          </NavLink>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default NavBar;
