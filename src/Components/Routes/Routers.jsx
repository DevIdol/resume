import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "../Blog/BlogList/Blog";
import Home from "../Resume/Home";
import NavBar from "../NavBar/NavBar";
import Portfolio from "../PortFolio/Portfolio";
import BlogView from "../Blog/BlogView/BlogView";
import Admin from "../Admin/Admin";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Rigister/Register";
const Routers = () => {
  const admin = false;
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="resume" element={<Home />} />
        <Route path="project" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogView />} />

        <Route path="admin-dashboard" element={admin && <Admin />} />

        <Route path="login" element={admin ? <Home /> : <Login />} />

        <Route path="register" element={admin ? <Home /> : <Register />} />
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
