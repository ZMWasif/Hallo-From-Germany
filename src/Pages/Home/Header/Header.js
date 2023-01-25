import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Header = () => {
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
              <Nav.Link href="home#services">Home</Nav.Link>
              <Nav.Link href="home#vlogs">Reviews</Nav.Link>
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
                <NavDropdown.Item href="#action/3.4">Products</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
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
