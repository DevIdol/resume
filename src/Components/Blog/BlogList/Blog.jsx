import React from "react";
import Footer from "../../Footer/Footer";
import BlogList from "./BlogList";

const Blog = () => {
  return (
    <div id="myblog" style={{ paddingTop: "100px", textAlign: "center" }}>
      <BlogList />
      <Footer href="#myblog" />
    </div>
  );
};

export default Blog;
