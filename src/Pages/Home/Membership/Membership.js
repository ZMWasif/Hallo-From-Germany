import {
  faPercentage,
  faTicket,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import "./Membership.css";

const Membership = () => {
  return (
    <div className="bg-slate-700 membership-container text-white">
      <div className="me-auto">
        <h3 className="d-flex justify-content-center">Join Our Membership !</h3>
        <h1 className="d-flex justify-content-center">
          You inspire us and give us energy each and every night!
        </h1>
        <Button className="membership-btn">Join Now</Button>{" "}
      </div>
      <div className="mx-auto">
        <h1>
          <FontAwesomeIcon icon={faVideoCamera}></FontAwesomeIcon> Exclusive
          Contents
        </h1>
        <h1>
          <FontAwesomeIcon icon={faPercentage}></FontAwesomeIcon> Discounts on
          Merch
        </h1>
        <h1>
          <FontAwesomeIcon icon={faTicket}></FontAwesomeIcon> Presale Tickets
        </h1>
      </div>
    </div>
  );
};

export default Membership;
