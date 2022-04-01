import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getBlogs } from "../BlogData";
import BlogListTitle from "./BlogListTitle";
import Button from "../../Screens/Button";
import "./BlogList.css";
const BlogList = () => {
  const blogs = getBlogs();
  let [searchParams, setSearchParams] = useSearchParams();
  const [loadmore, setLoadmore] = useState(3);

  const blog = blogs.filter((data) => {
    let filter = searchParams.get("filter");
    if (!filter) return true;
    let name = data.category.toLowerCase();

    return name.startsWith(filter.toLowerCase());
  });

  const clearSearch = () => {
    setSearchParams("");
  };

  const sliceblogs = blog.slice(0, loadmore);
  const onLoadmore = () => {
    setLoadmore((preValue) => preValue + 3);
  };
  // const isLoadmore = blogs.length > loadmore;
  const isFilterLoad = blog.length > loadmore;

  return (
    <div className="container">
      <BlogListTitle
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
      <div className="row">
        {!sliceblogs.length ? (
          <h1
            style={{
              paddingTop: "120px",
              textAlign: "center",
              width: "100%",
              height: "60vh",
            }}
          >
            No Result!
          </h1>
        ) : (
          sliceblogs.map((data, index) => {
            return (
              <Link to={`/blog/${data.id}`} key={index} className="col-md-4">
                <div className="card blog-item">               
                    <img
                      src={data.img}
                      alt="blog-img"
                      className="card-img-top blog-img"
                    />
                
                  <div className="card-body">
                    <div className="card-subtitle blog-subtitle">
                      <div className="blog-type">
                        <div className="blog-divider"></div>
                        <div className="blog-type-name">
                          <h6>{data.category}</h6>
                        </div>
                      </div>
                      <div className="blog-date">
                        <p className="text-muted">2 days ago</p>
                      </div>
                    </div>

                    <h5 className="card-title blog-title">
                     {data.title}
                    </h5>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
      {isFilterLoad &&
        (!sliceblogs.length ? (
          ""
        ) : (
          <Button type="button" onClick={onLoadmore} className="load-btn">
            Load More
          </Button>
        ))}
    </div>
  );
};

export default BlogList;
