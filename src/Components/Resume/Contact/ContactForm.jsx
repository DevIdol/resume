import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Spinner } from "react-bootstrap";
import Input from "../../Screens/Input";
import Button from "../../Screens/Button";
import classes from "./ContactForm.module.css";
import { AlertMessage } from "../../Alert/Alert";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [successAlt, setSuccessAlt] = useState(undefined);
  const [errorAlt, setErrorAlt] = useState(undefined);

  const handleForm = useRef();
  const onSubmitEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_qc9qyid",
        "template_u1hmpi5",
        handleForm.current,
        "xb9SX1IiNXCEYTS3c"
      )
      .then(
        (result) => {
          result && setLoading(false);
          result && setSuccessAlt(true);
          result &&
            setTimeout(() => {
              setSuccessAlt(false);
            }, 6200);
        },
        (error) => {
          error && setLoading(false);
          error && setErrorAlt(true);
          error &&
            setTimeout(() => {
              setErrorAlt(false);
            }, 6200);
        }
      );
    e.target.reset();
  };

  return (
    <div className={classes["contact-form"]}>
      <form className={classes.form} ref={handleForm} onSubmit={onSubmitEmail}>
        {successAlt && <AlertMessage alert="success" message="Email Send Successfully!" />}
        {errorAlt && <AlertMessage alert="error" message="Internet Connection Faild!" />}

        <Input
          className={classes["input-form"]}
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
        <Input
          className={classes["input-form"]}
          type="email"
          name="email"
          placeholder="Enter Your Email"
        />
        <textarea
          className={classes.textarea}
          name="message"
          placeholder="Enter Your Message"
          rows="6"
          required
        />
        <Button className={classes.button} type="submit">
          {loading ? <Spinner animation="border" /> : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
