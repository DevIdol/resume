import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Resume/Home";
import NavBar from "../NavBar/NavBar";
import Portfolio from "../PortFolio/Portfolio";
import Admin from "../Admin/Admin";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Rigister/Register";
import Blog from "../Blog/Blog";
const Routers = () => {
  const admin = true;
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="resume" element={<Home />} />
        <Route path="project" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />

        {admin && <Route path="admin-dashboard" element={<Admin />} />}

        {!admin && <Route path="login" element={<Login />} />}
        {!admin && <Route path="register" element={<Register />} />}

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
