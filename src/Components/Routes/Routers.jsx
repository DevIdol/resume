import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Resume/Home";
import NavBar from "../NavBar/NavBar";
import Portfolio from "../PortFolio/Portfolio";

const Routers = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="resume" element={<Home />} />
        <Route path="project" element={<Portfolio />} />
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
