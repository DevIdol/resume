import React from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "./BlogData";

const BlogView = () => {
  const params = useParams();
  const blog = getBlog(parseInt(params.id));
  return (
    <div style={{ padding: "100px" }}>
      <h1>{blog.category}</h1>
      <h5>{blog.title}</h5>
      <h6>{blog.description}</h6>
    </div>
  );
};

export default BlogView;
