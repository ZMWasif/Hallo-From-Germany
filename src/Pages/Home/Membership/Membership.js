import {
  faPercentage,
  faTicket,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import "./Membership.css";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";

const Membership = () => {
  return (
    <div className="bg-slate-700 membership-container text-white">
      <div className="me-auto">
        <div>
          <h4 className="d-flex justify-content-center">
            Join Our
            <span className="text-danger ms-2"> Membership !</span>
          </h4>
          <h3 className="d-flex justify-content-center">
            You inspire us and give us energy each and every night!
          </h3>
        </div>
        <div className="d-flex justify-center">
          <Button as={Link} to="/register" className="membership-btn">
            Join Now
          </Button>{" "}
        </div>
      </div>
      <div className="mx-auto">
        <h3 className="animate__animated animate__zoomInDown animate__delay-4s ">
          <FontAwesomeIcon icon={faVideoCamera}></FontAwesomeIcon> Exclusive
          <span className="text-danger"> Contents</span>
        </h3>
        <h3 className="animate__animated animate__zoomIn animate__delay-4s">
          <FontAwesomeIcon icon={faPercentage}></FontAwesomeIcon>
          <span className="text-danger"> Discounts </span> on Merch
        </h3>
        <h3 className="animate__animated animate__zoomInUp animate__delay-4s">
          <FontAwesomeIcon icon={faTicket}></FontAwesomeIcon> Presale{" "}
          <span className="text-danger"> Tickets </span>
        </h3>
      </div>
    </div>
  );
};

export default Membership;
