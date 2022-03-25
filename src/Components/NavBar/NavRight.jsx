import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../Context/ThemeContext";
import classes from "./NavRight.module.css"
const NavRight = () => {
  const [{ theme }, toggleTheme] = useContext(ThemeContext);
  const themeMode = theme === "dark" ? <FaMoon /> : <FaSun />;
  return (
    <div>
      <div className={classes.btn} onClick={toggleTheme}>{themeMode}</div>
    </div>
  );
};

export default NavRight;
