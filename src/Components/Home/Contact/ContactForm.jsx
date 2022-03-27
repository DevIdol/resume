import React from "react";
import Input from "../../Screens/Input";
import Button from "../../Screens/Button";
import classes from "./ContactForm.module.css";
const ContactForm = () => {
  return (
    <div className={classes["contact-form"]}>
      <form className={classes.form} action="">
        <Input type="text" name="name" placeholder="Enter Your Name" />
        <Input type="email" name="email" placeholder="Enter Your Email" />
        <textarea
          className={classes.textarea}
          name=""
          placeholder="Enter Your Message"
          id=""
          cols="34"
          rows="8"
        />
      </form>
    </div>
  );
};

export default ContactForm;
