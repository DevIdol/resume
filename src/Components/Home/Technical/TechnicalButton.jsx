import React, { Fragment, useState } from "react";
import Button from "../../Screens/Button";
import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import classes from "./TechnicalButton.module.css"

const TechnicalButton = () => {
  const [skill, setSkill] = useState(<FrontEnd/>);
  const [isActive, setIsActive] = useState("front");
  return (
    <Fragment>
      <div className={classes.btn}>
        <Button
          className={isActive === "front" ? classes.active : ""}
          onClick={() => {
            setSkill(<FrontEnd/>);
            setIsActive("front");
          }}
        >
          FrontEnd
        </Button>
        <Button
          className={isActive === "back" ? classes.active : ""}
          onClick={() => {
            setSkill(<BackEnd/>);
            setIsActive("back");
          }}
        >
          BackEnd
        </Button>
        <Button
          className={isActive === "other" ? classes.active : ""}
          onClick={() => {
            setSkill("Other");
            setIsActive("other");
          }}
        >
          Other Skills
        </Button>
      </div>
      <div>{skill}</div>
    </Fragment>
  );
};

export default TechnicalButton;
