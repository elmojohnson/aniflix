import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper flex items-center">
        <NavLink to="/" className="font-bold text-2xl">Aniflix</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
