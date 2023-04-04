import React from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";

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
    <div
      id="NavBar"
      className=" w-full flex justify-between items-center border-b border-NavBar px-12 mb-4"
    >
      <Logo />

      <div className=" flex items-center gap-9">
        {navData.map((item) => (
          <NavLink key={item.id} to={item.link}>
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className=" flex items-center gap-9">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default NavBar;
