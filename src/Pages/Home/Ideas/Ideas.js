import { Button } from "react-bootstrap";
import React from "react";
import "./Ideas.css";
import ideas from "../../../images/ideas.jpg";

const Ideas = () => {
  return (
    <div className="ideas-container">
      <div
        style={{
          backgroundImage: `url(${ideas})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "100vh",
        }}
      >
        <div className="text-white text-center sm:text-left md:content-around idea-container">
          <h1>Creative ideas that will help your brand soar.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            quibusdam!
          </p>
          <Button className="discover">Discover More!</Button>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
