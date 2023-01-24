import React from "react";
import { Card } from "react-bootstrap";
import profile1 from "../../../images/profile.jpg";
import "./Description.css";

const Description = () => {
  return (
    <div className="mt-8 description-container">
      <div className="row justify-content-evenly">
        <div className="col-4">
          <h1 className="text-white">
            HALLO FROM <span className="text-danger">GERMANY</span>
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            nemo?
          </p>
          <div>
            <Card className="profile-card " style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Text className="text-light mt-5">
                  Our Creative content reflects all
                </Card.Text>
                <Card.Link
                  className="btn btn-light profile-button mb-5"
                  href="#"
                >
                  Try it now
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="col-4">
          <img className="profile1" src={profile1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Description;
