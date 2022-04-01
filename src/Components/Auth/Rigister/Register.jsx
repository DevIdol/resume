import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="text-center" style={{paddingTop: "100px"}}>
      <h1>Register</h1>
      <Link to="/login">Go To Login</Link>
    </div>
  );
};

export default Register;
