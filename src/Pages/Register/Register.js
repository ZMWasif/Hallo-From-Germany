import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Your Passwords did not match");
      return;
    }
  };

  return (
    <div className="form-container">
      <div className="container w-100 mx-auto">
        <h2 className="text-white text-center mt-4">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="mb-3">
            <label
              for="exampleInputPassword1"
              className="form-label text-white"
            >
              Your Name
            </label>
            <input
              onBlur={handleNameBlur}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-white">
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
              for="exampleInputPassword1"
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
          <div className="mb-3">
            <label
              for="exampleInputPassword1"
              className="form-label text-white"
            >
              Confirm Password
            </label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <div className="mb-3">
            <Link
              className="form-check-label text-white form-link"
              to="/login"
              for="exampleCheck1"
            >
              Already Registered?
            </Link>
          </div>
          <Button className="login-btn w-100 px-4" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
