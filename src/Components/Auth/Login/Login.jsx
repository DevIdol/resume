import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="text-center" style={{ paddingTop: "100px" }}>
      <h1>Login</h1>
      <Link to="/register">Go To Register</Link>
    </div>
  );
};

export default Login;
