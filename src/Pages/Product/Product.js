import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { id, name, img, description, price } = product;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return <div></div>;
};

export default Product;
