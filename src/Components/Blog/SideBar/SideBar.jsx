import React from "react";
import SocialMedia from "../../Resume/About/SocialMedia";
import classes from "./SideBar.module.css";
const SideBar = () => {
  return (
    <div className={classes.sideBar}>
      <h6 className={classes.sideBarTitle}>Categories</h6>
      <ul className={classes.sideBarList}>
        <li className={classes.sideBarListItem}>Flutter</li>
        <li className={classes.sideBarListItem}>Ubuntu</li>
        <li className={classes.sideBarListItem}>JavaScript</li>
        <li className={classes.sideBarListItem}>Php</li>
        <li className={classes.sideBarListItem}>NodeJs</li>
        <li className={classes.sideBarListItem}>Laravel</li>
      </ul>
      <div className={classes.sideBarFooter}>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideBar;
