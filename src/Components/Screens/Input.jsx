import React from "react";
import classes from "./Input.module.css";

const Input = ({ type,value,onChange, name, placeholder, className }) => {
  return (
    <input
      className={`${classes.input} ${className}`}
      type={type || "text"}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
