import React from "react";
// import { FaRegEdit } from "react-icons/fa";
// import { RiDeleteBin5Line } from "react-icons/ri";
import classes from "./BlogSubTitle.module.css";

const BlogSubTitle = ({ category, date, edit, remove }) => {
  return (
    <div className={classes.blogSubTitle}>
      <div className={classes.leftSide}>
        <div className={classes.divider}></div>
        <h6 className={classes.category}>{category}</h6>
      </div>
      <h6 className={classes.date}>{date}</h6>
      {/* <div className={classes.rightSide}>
        <FaRegEdit />
        <RiDeleteBin5Line />
      </div> */}
    </div>
  );
};

export default BlogSubTitle;
