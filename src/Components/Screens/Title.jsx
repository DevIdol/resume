import React, { Fragment } from "react";
import Underline from "./Underline";
import classes from "./Title.module.css";

const Title = (props) => {
  return (
    <Fragment>
      <h2 className={classes.title} >{props.title}</h2>
      <div className={classes.underline}>
        <Underline className={props.className} />
        {props.star}
        <Underline className={props.className} />
      </div>
    </Fragment>
  );
};

export default Title;
