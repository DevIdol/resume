import React, { useState } from "react";
import AdminBlog from "./AdminBlog";
import classes from "./Admin.module.css";
import Menu from "./Menu";
import me from "../../assets/me.png";
import AdminSetting from "./AdminSetting";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("blog");
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const [button, setButton] = useState(<AdminBlog />);
  return (
    <section className={classes.admin}>
      <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
      <ul
        className={
          isOpen ? `${classes.adminLeft} ${classes.active}` : classes.adminLeft
        }
      >
        <li
          className={classes.adminHeader}
          onClick={() => {
            setButton(<AdminSetting />);
            setIsOpen(false);
            setIsActive("setting");
          }}
        >
          <img className={classes.me} src={me} alt="" />
          <span className={classes.adminMail}>devidol.mm@gmail.com</span>
        </li>
        <li
          className={
            isActive === "blog"
              ? `${classes.adminItem} ${classes.active}`
              : classes.adminItem
          }
          onClick={() => {
            setButton(<AdminBlog />);
            setIsOpen(false);
            setIsActive("blog");
          }}
        >
          Blog
        </li>
        <li
          className={
            isActive === "setting"
              ? `${classes.adminItem} ${classes.active}`
              : classes.adminItem
          }
          onClick={() => {
            setButton(<AdminSetting />);
            setIsOpen(false);
            setIsActive("setting");
          }}
        >
          Setting
        </li>
        <li className={classes.adminItem}>Logout</li>
      </ul>
      <div className={classes.adminRight}>{button}</div>
      {isOpen && <div onClick={closeMenu} className={classes.overflow}></div>}
    </section>
  );
};

export default Admin;
