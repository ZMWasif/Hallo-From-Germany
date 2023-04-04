import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height={45} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Documentation
              </Nav.Link>
              <NavDropdown title="Features" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Travel Vlogs
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Cooking Recipe Vlogs
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Fashion & Beauty Vlogs
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/products">Products</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user ? (
                <Button className="signout-btn" onClick={handleSignOut}>
                  {" "}
                  Sign Out <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              {/*  {user ? (
                <button
                  className="btn btn-link text-white"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
