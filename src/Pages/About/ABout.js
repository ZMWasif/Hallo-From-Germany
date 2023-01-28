import React from "react";
import { Card } from "react-bootstrap";
import profile from "../../images/profile.jpg";
import "./ABout.css";

const ABout = () => {
  return (
    <div className="about-container">
      <Card className="abtcard-container" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={profile} />
        <Card.Body>
          <Card.Title>Novera Binte Alam</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ABout;
