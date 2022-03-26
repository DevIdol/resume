import React from "react";
import { RiMedalFill } from "react-icons/ri";
import Title from "../../Screens/Title";
import classes from "./Technical.module.css";
import TechnicalButton from "./TechnicalButton";

const Technical = () => {
  return (
    <section className={classes["technical-section"]}>
      <Title
        title="TECHNICAL SKILLS"
        icon={<RiMedalFill className={classes.icon} />}
        className={classes.underline}
      />
      <TechnicalButton />

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

export default Technical;
