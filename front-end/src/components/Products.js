import React from "react";

const handleSubmit = () => {};

const Products = (drinkItems) => {
  return drinkItems.map((product) => {
    <>
      <div className="cart">
        <h1>{product.name}</h1>
        <h2>{product.description}</h2>
        <h3> Price : {product.price}</h3>
        <div>{product.category}</div>
        <button onClick={handleSubmit}> confirm order</button>
      </div>
    </>;
  });
};

module.exports = { Products };
