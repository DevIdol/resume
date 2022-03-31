import React, { Fragment } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import classes from "./BlogViewRight.module.css";
import { getBlogs } from "../BlogData";

const BlogViewRight = () => {
  const blogs = getBlogs();
  let [searchParams, setSearchParams] = useSearchParams();

  const blog = blogs.filter((data) => {
    let filter = searchParams.get("filter");
    if (!filter) return true;
    let name = data.category.toLowerCase();

    return name.startsWith(filter.toLowerCase());
  });

  const clearSearch = () => {
    setSearchParams("");
  };
  const sliceBlog = blog.slice(0, 3);
  return (
    <Fragment>
      <div className={classes["blog-view-right-header"]}>
        <h4 className={classes["blog-view-right-title"]}>Latest Blogs</h4>
        <SearchBar
          onClear={clearSearch}
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
      </div>
      {!sliceBlog.length ? (
        <h1 style={{ textAlign: "center", paddingTop: "100px" }}>No Result!</h1>
      ) : (
        sliceBlog.map((data) => (
          <Link
            to={`/blog/${data.id}`}
            key={data.id}
            className={classes["blog-view-right-items"]}
          >
            <img
              className={classes["blog-view-right-items-img"]}
              src={data.img}
              alt="Img"
            />
            <div className={classes["blog-items-content"]}>
              <h3 className={classes["blog-view-right-items-title"]}>
                {data.title}
              </h3>
              <div className={classes["blog-view-left-sub-title"]}>
                <div className={classes["left-sub-title"]}>
                  <div className={classes.divider}></div>
                  <h4 className={classes["blog-category"]}>{data.category}</h4>
                </div>
                <h6 className={classes["blog-date"]}>2 days ago</h6>
              </div>
            </div>
          </Link>
        ))
      )}
    </Fragment>
  );
};

export default BlogViewRight;
