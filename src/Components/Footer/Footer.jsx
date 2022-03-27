import React from "react";
import SocialMedia from "../Home/About/SocialMedia";
import logo from "../../assets/light.png";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes["footer-section"]}>
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={classes["text-content"]}>
        <h6>Hey There, I Am</h6>
        <h5>Web And Mobile Application Developer</h5>
      </div>
      <div className={classes["footer-contact"]}>
        <SocialMedia />
      </div>

      <div className={classes.copyright}>
        <h4>Developed By DevIdol</h4>
        <h5>Copyright &copy; 2021 - {new Date().getFullYear()}</h5>
      </div>
    </footer>
  );
};

export default Footer;
