import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../../Screens/Card";
import Input from "../../Screens/Input";
import classes from "./Login.module.css";
import light from "../../../assets/light.gif";
import dark from "../../../assets/dark.gif";
import Button from "../../Screens/Button";
import { ThemeContext } from "../../../Context/ThemeContext";

const Login = () => {
  const [ {theme} ] = useContext(ThemeContext);
  return (
    <div className={classes.login}>
      {theme === "light" ? (
        <img className={classes.loginBackground} src={light} alt="" />
      ) : (
        <img className={classes.loginBackground} src={dark} alt="" />
      )}
      <Card className={classes.loginCard}>
        <h3>Login</h3>
        <div className={classes.loginForm}>
          <label>Email</label>
          <Input type="text" placeholder="Enter Your Email" />
          <label>Password</label>
          <Input type="password" placeholder="Enter Your Password" />
        </div>
        <Button className={classes.loginSubmit}>Login</Button>
        <br />
        <Link className={classes.link} to="/register">
          Go To Register
        </Link>
      </Card>
    </div>
  );
};

export default Login;
