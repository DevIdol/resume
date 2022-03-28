import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Portfolio from "../PortFolio/Portfolio";
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/react-portfolio" element={<NavBar />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="portfolio" element={<NavBar />}>
          <Route index element={<Portfolio />} />
        </Route>
        <Route path="blog" element={<NavBar />}>
          <Route index element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
