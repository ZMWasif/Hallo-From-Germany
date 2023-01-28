import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-white text-center">
          Make-Up <span className="text-danger">Items</span>
        </h1>
        <br />
      </div>

      <div className="services-container mt-4">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
