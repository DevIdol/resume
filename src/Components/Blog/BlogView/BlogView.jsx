import React, { Fragment } from "react";
import BlogViewLeft from "./BlogViewLeft";
import BlogViewRight from "./BlogViewRight";
import classes from "./BlogView.module.css";
import Footer from "../../Footer/Footer";

const BlogView = () => {
  return (
    <Fragment>
      <div id="blog-view" className={classes["blog-view"]}>
        <div className={classes["blog-view-left"]}>
          <BlogViewLeft />
          <div className={classes["footer-left"]}>
            <Footer href="#blog-view" />
          </div>
        </div>
        <div className={classes["blog-view-right"]}>
          <BlogViewRight />
        </div>
      </div>
      <div className={classes.footer}>
        <Footer href="#blog-view" />
      </div>
    </Fragment>
  );
};

export default BlogView;
