import React from "react";
import { NavLink } from "react-router-dom";
import { getNavItems } from "./NavBarItems";
import classes from './NavCenter.module.css'

const NavCenter = () => {
  const navItems = getNavItems();
  return (
    <nav className={classes['nav-center']}>
      <ul className={classes['nav-items']}>{navItems.map((data) => (
        <NavLink
         className={classes['nav-item']}
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to={data.link}
          key={data.id}
        >
          {data.name}
        </NavLink>
      ))}</ul>
    </nav>
  );
};

export default NavCenter;
