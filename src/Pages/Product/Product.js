import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { id, name, img, description, price } = product;

  return (
    <div>
      <div className="w-50 mx-auto">
        <CardGroup className="cardgroup-container">
          <Card className="card-container">
            <Card.Img className="w-50 mx-auto" variant="top" src={img} />
            <Card.Body className="mx-auto">
              <Card.Title>{name}</Card.Title>
              <Card.Text>Price: €{price}</Card.Text>

              <Button className="vlog-btn border-rounded-2xl w-30">
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Product;
