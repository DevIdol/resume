import React, { Fragment } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import classes from "./AdminBlog.module.css";
import Button from "../Screens/Button";
import five from '../../assets/project/five.png'

const AdminBlog = () => {
  return (
    <Fragment>
      <h2 className={classes.title}>Blog Page</h2>
      <img className={classes.adminBlogImg} src={five} alt="blogImg" />
      <div className={classes.adminBlog}>
        <form className={classes.adminBlogForm}>
          <div className={classes.adminBlogFormGroup}>
            <label htmlFor="fileInput">
              <MdAddCircleOutline className={classes.adminBlogIcon} />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title..."
              className={classes.blogInput}
            />
          </div>
          <div className={classes.adminBlogFormGroup}>
            <textarea
              placeholder="Description..."
              type="text"
              className={`${classes.blogInput} ${classes.blogDesc}`}
            ></textarea>
          </div>
          <Button className={classes.blogSubmit}>Publish</Button>
        </form>
      </div>
    </Fragment>
  );
};

export default AdminBlog;
