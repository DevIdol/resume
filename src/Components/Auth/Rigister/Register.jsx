import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Card from "../../Screens/Card";
import Input from "../../Screens/Input";
import light from "../../../assets/light.gif";
import dark from "../../../assets/dark.gif";
import Button from "../../Screens/Button";
import classes from "./Register.module.css";
import { ThemeContext } from "../../../Context/ThemeContext";
const Register = () => {
  const [{ theme }] = useContext(ThemeContext);
  return (
    <div className={classes.register}>
      {theme === "light" ? (
        <img className={classes.registerBackground} src={light} alt="" />
      ) : (
        <img className={classes.registerBackground} src={dark} alt="" />
      )}
      <Card className={classes.registerCard}>
        <h3>Register</h3>
        <div className={classes.registerForm}>
          <label>Username</label>
          <Input type="text" placeholder="Username" />
          <label>Email</label>
          <Input type="text" placeholder="Email" />
          <label>Password</label>
          <Input type="password" placeholder="Password" />
        </div>
        <Button className={classes.registerSubmit}>Register</Button>
        <br />
        <Link className={classes.link} to="/login">
          Go To Login
        </Link>
      </Card>
    </div>
  );
};

export default Register;
