import React from "react";
import { NavLink } from "react-router-dom";
import { getNavItems } from "./NavBarItems";

const NavCenter = () => {
  const navItems = getNavItems();
  return (
    <nav>
      {navItems.map((data) => (
        <NavLink
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
      ))}
    </nav>
  );
};

export default NavCenter;
