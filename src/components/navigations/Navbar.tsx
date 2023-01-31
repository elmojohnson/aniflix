import React from "react";
import { NavLink } from "react-router-dom";
import { MdSearch } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper flex items-center justify-between">
        <NavLink to="/" className="font-bold text-3xl uppercase tracking-wider text-primary">Aniflix</NavLink>
        <NavLink to="/search" className="text-xl text-muted hover:text-white"><MdSearch /></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
