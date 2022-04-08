import React, { Fragment } from "react";
import { BiUserCircle } from "react-icons/bi";
import classes from "./AdminSetting.module.css";
import me from "../../assets/me.png";
import Button from "../Screens/Button";

const AdminSetting = () => {
  return (
    <Fragment>
      <div className={classes.settingTitle}>
        <span className={classes.settingUpdateTitle}>Update Your Account</span>
        <span className={classes.settingDeleteTitle}>Delete Account</span>
      </div>
      <form action="" className={classes.settingForm}>
        <label htmlFor="">Profile Picture</label>
        <div className={classes.settingImg}>
          <img src={me} alt="" />
          <label htmlFor="fileInput">
            <BiUserCircle className={classes.settingPPIcon} />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
        </div>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="DevIdol" />
        <label htmlFor="">Username</label>
        <input type="email" placeholder="devidol.mm@gmail.com" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <Button className={classes.settingSubmit}>Update</Button>
      </form>
    </Fragment>
  );
};

export default AdminSetting;
