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
          path={admin ? "admin-dashboard" : "login"}
          element={admin ? <Admin /> : <Login />}
        />

        <Route path="login" element={<Login />} />

        <Route path="register" element={<Register />} />
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
