import React, { Fragment } from "react";
import About from "./About/About"
import Technical from "./Technical/Technical";

const Home = () => {
  return (
    <Fragment>
      <About />
      <Technical/>
    </Fragment>
  );
};

export default Home;
