import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ drinkItems, token }) => {
  const { productId } = useParams();
  const product = drinkItems.find((product) => productId === product.id);
  if (product) {
    return (
      <>
        <h2>Beverage</h2>
        <div key={product.id} style={{ border: "1px solid black" }}>
          <h5>{product.title}</h5>

          <div>Description : {product.description}</div>
          <div>Price: {product.price}</div>
        </div>
      </>
    );
  } else {
    return <h1>LOADING :0)</h1>;
  }
};
export default as = { Product };
