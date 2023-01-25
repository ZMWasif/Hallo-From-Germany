import React from "react";
import { Button } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div className="container w-100 mx-auto">
        <h2 className="text-white text-center mt-4">Login</h2>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-white">
              Email address
            </label>
            <input
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
              for="exampleInputPassword1"
              className="form-label text-white"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="d-flex">
            <p className="text-white me-2">New to Hallo From Germany?</p>

            <Link
              className="form-check-label text-white form-link"
              to="/register"
              for="exampleCheck1"
            >
              Create an account
            </Link>
          </div>

          <Button className="login-btn w-100 px-4" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
