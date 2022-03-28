import React from "react";
import { RiMedalFill } from "react-icons/ri";
import AllPortfolio from "./All/AllPortfolio";
import Title from "../Screens/Title";
import classes from "./Portfolio.module.css";
const Portfolio = () => {
  return (
    <section className={classes["portfolio-section"]}>
      <div className={classes.title}>
        <Title
          title="My Projects"
          icon={<RiMedalFill className={classes.icon} />}
          className={classes.underline}
        />
      </div>
      <AllPortfolio />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Portfolio;
