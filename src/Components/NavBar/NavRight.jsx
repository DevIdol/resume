import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../Context/ThemeContext";
import { GitHub, Mail } from "../ContactIcon/ContactIcons";
import classes from "./NavRight.module.css";
const NavRight = () => {
  const [{ theme }, toggleTheme] = useContext(ThemeContext);
  const themeMode = theme === "dark" ? <FaMoon /> : <FaSun />;
  return (
    <div className={classes["nav-right"]}>
      <div>
        <GitHub className={classes.github} />
        <a
          href="mailto:devidol.mm@gmail.com"
          target="__back"
          rel="nofollow noopener noreferrer"
        >
          <Mail className={classes.mail} />
        </a>
      </div>
      <div className={classes["toggle-theme"]} onClick={toggleTheme}>
        {themeMode}
      </div>
    </div>
  );
};

export default NavRight;
