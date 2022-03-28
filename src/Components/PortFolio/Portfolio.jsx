import React from "react";
import { RiMedalFill } from "react-icons/ri";
import Title from "../Screens/Title";
import classes from "./Portfolio.module.css";
import PortfolioButton from "./PortfolioButton";
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
      <PortfolioButton />

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
