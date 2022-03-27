import React from "react";
import classes from "./Input.module.css";

const Input = ({ type, name, placeholder, className }) => {
  return (
    <input
      className={`${classes.input} ${className}`}
      type={type || "text"}
      name={name}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
