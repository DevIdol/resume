import SearchBar from "../SearchBar/SearchBar"
import React from "react";
import classes from "./BlogListTitle.module.css";

const BlogListTitle = ({ value, onChange, onClear }) => {
  return (
    <div className={classes["blog-list-title"]}>
      <h2>Latest Blogs</h2>
      <SearchBar value={value} onChange={onChange} onClear={onClear} />
    </div>
  );
};

export default BlogListTitle;
