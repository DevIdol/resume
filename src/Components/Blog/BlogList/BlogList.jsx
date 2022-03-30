import React,{useState} from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getBlogs } from "../BlogData";
import BlogListTitle from "./BlogListTitle";
import Button from "../../Screens/Button"
import "./BlogList.css";
const BlogList = () => {
  const blogs = getBlogs();
  let [searchParams, setSearchParams] = useSearchParams();
  const [loadmore, setLoadmore] = useState(3);
  const sliceblogs = blogs.slice(0, loadmore);
  const onLoadmore = () => {
    setLoadmore((preValue) => preValue + 3);
  };
  const isLoadmore = blogs.length > loadmore;

  const blog = sliceblogs.filter((data) => {
    let filter = searchParams.get("filter");
    if (!filter) return true;
    let name = data.category.toLowerCase();

    return name.startsWith(filter.toLowerCase());
  });
  const clearSearch = () => {
    setSearchParams("");
  };
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
        {!blog.length ? (
          <h1>No Result</h1>
        ) : (
          blog.map((data) => {
            return (
              <Link
                to={`/blog/${data.id}`}
                key={data.id}
                className="col-md-4 blog-items"
              >
                <div className="blog-item">
                  <img src={data.img} alt="Img.." />
                  <div className="divider"></div>
                  <h4 className="blog-category">{data.category}</h4>
                  <h6 className="text-muted blog-date">2 days ago</h6>
                  <h1 className="blog-item-title">{data.title}</h1>
                </div>
              </Link>
            );
          })
        )}
      </div>
      {isLoadmore && (
        <Button type="button" onClick={onLoadmore} className="load-btn">
          Load More
        </Button>
      )}
    </div>
  );
};

export default BlogList;
