import React from "react";
import classes from "./Input.module.css";

const Input = ({ type, name, placeholder }) => {
  return (
    <input
      className={classes.input}
      type={type || "text"}
      name={name}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
