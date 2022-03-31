import React from "react";
import classes from "./BlogViewLeft.module.css";
import { useParams } from "react-router-dom";
import { getBlog } from "../BlogData";

const BlogViewLeft = () => {
  const params = useParams();
  const blog = getBlog(parseInt(params.id));
  return (
    <div className={classes["blog-view-left-side"]}>
      <img src={blog.img} alt="" />
      <div className={classes["blog-view-left-sub-title"]}>
        <div className={classes["left-sub-title"]}>
          <div className={classes.divider}></div>
          <h4 className={classes["blog-category"]}>{blog.category}</h4>
        </div>
        <h6 className={classes["blog-date"]}>2 days ago</h6>
      </div>
      <h1 className={classes["blog-title"]}>{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogViewLeft;
