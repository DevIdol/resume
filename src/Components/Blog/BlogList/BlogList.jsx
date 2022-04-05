import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Screens/Button";
import BlogSubTitle from "../BlogSubTitle/BlogSubTitle";
import classes from "./BlogList.module.css";
import { getBlogs } from "../BlogData";

const BlogList = () => {
  const blogs = getBlogs();
  const [loadMore, setLoadMore] = useState(2);
  const reverseBlogs = blogs.slice(0).reverse();

  const sliceBlogs = reverseBlogs.slice(0, loadMore);

  const onLoadMore = () => {
    setLoadMore((pre) => pre + 2);
  };
  const isLoadMore = blogs.length > loadMore;

  return (
    <div className={classes.blogList}>
      <div className="container">
        <div className={classes.blogTitle}>
          <h3>Blog Detail</h3>
        </div>
        <div className="row">
          {sliceBlogs.map((data) => (
            <Link to="/resume" className="col-md-6" key={data.id}>
              <div className={classes.blogListItems}>
                <img src={data.img} className={classes.blogListImg} alt="" />
                <BlogSubTitle category={data.category} date={data.date} />
                <h5 className={classes.blogListTitle}>{data.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {isLoadMore && (
        <div className={classes.loadBtn}>
          <Button type="button" onClick={onLoadMore}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
