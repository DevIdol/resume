import React, { useContext } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import dark from "../../../assets/dark.gif";
import light from "../../../assets/light.gif";
import classes from "./Contact.module.css";
import ContactTitle from "./ContactTitle";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [{ theme }] = useContext(ThemeContext);
  const bgImg = theme === "dark" ? dark : light;
  return (
    <section className={`${classes["contact-section"]}`}>
      <img src={bgImg} alt="" />
      <div className={classes.overlay}></div>
      <ContactTitle />
      <ContactForm />
    </section>
  );
};

export default Contact;
