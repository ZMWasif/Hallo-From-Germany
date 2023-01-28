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
            This is Novera here. I am basically from Bangladesh but currently
            living in Germany. So I created this little platform called “Hallo
            from Germany” to share my everyday lifestyle vlogs 👗, travel
            experiences ✈️, fashion and beauty tips with you all. And also I
            would love to share more interesting things about Germany.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ABout;
