import React from "react";
import Input from "../../Screens/Input";
import Button from "../../Screens/Button";
import classes from "./ContactForm.module.css";
const ContactForm = () => {
  return (
    <div className={classes["contact-form"]}>
      <form className={classes.form} action="">
        <Input className={classes['input-form']} type="text" name="name" placeholder="Enter Your Name" />
        <Input className={classes['input-form']} type="email" name="email" placeholder="Enter Your Email" />
        <textarea
          className={classes.textarea}
          name=""
          placeholder="Enter Your Message"
          rows="6"
        />
        <Button type="submit" >Send Message</Button>
      </form>
    </div>
  );
};

export default ContactForm;
