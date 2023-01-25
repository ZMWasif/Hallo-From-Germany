import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./Vlogs.css";
import amsterdam from "../../../images/vlogs/amsterdam.jpg";
import greece from "../../../images/vlogs/greece.jpg";
import portugal from "../../../images/vlogs/portugal.jpg";

const Vlogs = () => {
  return (
    <div>
      <div>
        <h1 className="text-white text-center">
          My Latest <span className="text-danger">Travel</span> Vlogs
        </h1>
        <br />
      </div>
      <div>
        <CardGroup className="cardgroup-container">
          <Card className="card-container">
            <Card.Img variant="top" src={amsterdam} />
            <Card.Body>
              <Card.Title>Amsterdam Tour</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button className="vlog-btn border-rounded-2xl w-30">
                Watch Now
              </Button>
            </Card.Body>
          </Card>
          <Card className="card-container">
            <Card.Img variant="top" src={greece} />
            <Card.Body>
              <Card.Title>Greece Tour</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
              <Button className="vlog-btn w-30">Watch Now</Button>
            </Card.Body>
          </Card>
          <Card className="card-container">
            <Card.Img variant="top" src={portugal} />
            <Card.Body>
              <Card.Title>Lisbon tour</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Button className="vlog-btn w-30 justify-center">
                Watch Now
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Vlogs;
