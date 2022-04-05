import React from "react";
import classes from "./BlogSubTitle.module.css";

const BlogSubTitle = ({ category, date, edit, remove }) => {
  return (
    <div className={classes.blogSubTitle}>
      <div className={classes.leftSide}>
        <div className={classes.divider}></div>
        <h6 className={classes.category}>{category}</h6>
      </div>
      <h6 className={classes.date}>{date}</h6>
    </div>
  );
};

export default BlogSubTitle;
