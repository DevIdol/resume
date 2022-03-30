import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Blog from "../Blog/BlogList/Blog";
import Home from "../Resume/Home";
import NavBar from "../NavBar/NavBar";
import Portfolio from "../PortFolio/Portfolio";
import BlogView from "../Blog/BlogView";
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="resume" element={<NavBar />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="project" element={<NavBar />}>
          <Route index element={<Portfolio />} />
        </Route>
        <Route path="blog" element={<NavBar />}>
          <Route index element={<Blog />} />
          <Route path=":id" element={<BlogView />} />
        </Route>
        <Route
          path="*"
          element={
            <section style={{ textAlign: "center", paddingTop: "120px" }}>
              <h1>404 Not Found!</h1>
            </section>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routers;
