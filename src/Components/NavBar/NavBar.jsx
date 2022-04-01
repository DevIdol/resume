import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavCenter from "./NavCenter";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const [border, setBorder] = useState(false);
  const changeBorder = () => {
    console.log(window.scrollY);
    if (window.scrollY > 0) {
      setBorder(true);
    } else {
      setBorder(false);
    }
  };

  useEffect(() => {
    changeBorder();
    window.addEventListener("scroll", changeBorder);
  }, [border]);
  console.log(border)
  return (
    <header>
      <div
        className={classes.navigation}
        style={{
          boxShadow: border ? "0 5px 5px -5px rgb(128, 128, 128, 0.6)" : "none",
        }}
      >
        <NavLeft />
        <NavCenter />
        <NavRight />
      </div>
      <Outlet />
    </header>
  );
};

export default NavBar;
