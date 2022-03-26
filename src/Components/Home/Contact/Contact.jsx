import React, { useContext } from "react";
import { FaRegStar } from "react-icons/fa";
import { ThemeContext } from "../../../Context/ThemeContext";
import dark from "../../../assets/dark.gif";
import light from "../../../assets/light.gif";
import Title from "../../Screens/Title";
import "./Contact.css";

const Contact = () => {
  const [{ theme }] = useContext(ThemeContext);
  const bgImg = theme === "dark" ? dark : light;
  return (
    <section className="contact-section">
      <img src={bgImg} alt="" />
      <div className="overlay"></div>
      <div className="container contact-title">
        <Title
          title="Contact Me"
          icon={<FaRegStar className="icon" />}
          className="underline"
        />
      </div>
      <div className="contact-form">
          This is Input Field
      </div>
    </section>
  );
};

export default Contact;
