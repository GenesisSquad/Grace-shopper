import React from "react";

const handleSubmit = () => {};

const Product = (drinkItems) => {
  return drinkItems.map((drink) => {
    <>
      <div className="cart">
        <h1>{drink.name}</h1>
        <h2>{drink.description}</h2>
        <h3> Price : {drink.price}</h3>
        <div>{drink.category}</div>
        <button onClick={handleSubmit}> confirm order</button>
      </div>
    </>;
  });
};

module.exports = { Product };
