import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import logo from "../../../images/logo.png";
import fb from "../../../images/icons/fb.png";
import insta from "../../../images/icons/instagram.png";
import youtube from "../../../images/icons/youtube.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="mt-5 text-white">
      <div
        style={{ width: "80%" }}
        className="d-flex align-items-center justify-content-between mx-auto py-4 flex-wrap"
      >
        <div className="d-flex">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img alt="logo" src={logo} width="30px" />
          </a>
          <small className="ml-2">
            &copy; Hallo From Germany, @ {year} All rights reserved.
          </small>
        </div>
        <div className="d-flex">
          <Button className="vlog-btn w-5" type="submit">
            <a href="https://www.facebook.com/hallofromgermany">
              <img style={{ width: "30px" }} src={fb} alt="" />
            </a>
          </Button>
          <Button className="vlog-btn w-5 " type="submit">
            <a href="https://www.instagram.com/novera_explora">
              <img style={{ width: "30px" }} src={insta} alt="" />
            </a>
          </Button>
          <Button className="vlog-btn w-5 " type="submit">
            <a href="https://www.youtube.com/c/HallofromGermany">
              <img style={{ width: "30px" }} src={youtube} alt="" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
