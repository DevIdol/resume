import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import { getNavItems } from "./NavBarItems";
import classes from "./NavCenter.module.css";

const NavCenter = () => {
  const [{ theme }] = useContext(ThemeContext);
  const navItems = getNavItems();

  const activeColor = theme === "dark" ? "#65fcdb" : "#db084e";
  return (
    <nav className={classes["nav-center"]}>
      {/* <ul className={classes["nav-items"]}> */}
      {navItems.map((data) => (
        <NavLink
          className={classes["nav-item"]}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? 800 : "",
              color: isActive ? activeColor : "",
            };
          }}
          to={data.link}
          key={data.id}
        >
          {data.name}
        </NavLink>
      ))}
      {/* </ul> */}
    </nav>
  );
};

export default NavCenter;
