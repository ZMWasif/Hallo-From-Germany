import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const from = location.state?.from?.pathName || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div className="container w-100 mx-auto">
        <h2 className="text-white text-center mt-4">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="mb-3">
            <label
              htmlfor="exampleInputEmail1"
              className="form-label text-white"
            >
              Email address
            </label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlfor="exampleInputPassword1"
              className="form-label text-white"
            >
              Password
            </label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p className="text-white">Loading...</p>}
          <Button className="login-btn w-100 px-4" type="submit">
            Login
          </Button>
          <div className="d-flex mt-3">
            <p className="text-white me-2">New to Hallo From Germany?</p>

            <Link
              className="form-check-label text-white form-link"
              to="/register"
              htmlfor="exampleCheck1"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
