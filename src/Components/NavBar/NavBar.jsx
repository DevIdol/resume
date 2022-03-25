import React from "react";
import { Outlet } from "react-router-dom";
import NavCenter from "./NavCenter";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const NavBar = () => {
  return (
    <header>
      <NavLeft />
      <NavCenter />
      <NavRight/>
      <Outlet />
    </header>
  );
};

export default NavBar;
