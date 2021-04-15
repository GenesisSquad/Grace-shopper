import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { callApi } from "../api";

const Cart = ({ token }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [cart, setCart] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function prodToBuy() {
      // const data = await callApi({
      //   url: "/orders/cart",
      //   token: token,
      // });
      const data = {
        id: 3,
        status: "created",
        userId: 3,
        datePlaced: "2021-04-15T18:29:18.482Z",
        products: [
          {
            id: 9,
            name: "joe",
            description: "GREAT COFFEE!",
            price: "$22",
            imageURL:
              "https://images.squarespace-cdn.com/content/v1/57b7c57b44024338a6700bdf/1588704248137-5U0TCBQRZCKTVVLM8QUO/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/IMG_3607.jpg",
            inStock: true,
            category: "TEA",
            quantity: 5,
          },
          {
            id: 5,
            name: "Bella London Fog",
            description:
              "Delicious blend of Earl Grey tea with sultry oat milk foam. Notes of lavender and vanilla.",
            price: "$1200",
            imageURL:
              "https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/london-fog-tea-latte.jpg",
            inStock: true,
            category: "TEA",
            quantity: 6,
          },
        ],
      };
      console.log("DATA:", data);
      if (data && data.name) {
        setCart(data.products);
        setPrice(getTotalSum());
        console.log("SEE ARRAY");
      } else {
        // console.log('DIDN'T WORK!!!')
      }
    }
    prodToBuy();
  });

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const getTotalSum = () => {
    return cart.reduce(
      (sum, { price, quantity }) => sum + parseFloat(price.slice(1)) * quantity,
      0
    );
  };

  return (
    <>
      {cart && cart.length ? (
        <>
          <h1>My Cart</h1>
          {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
          <div className="products">
            {cart.map((product, idx) => (
              <div className="product" key={idx}>
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <input
                  value={product.quantity}
                  onChange={(e) =>
                    setQuantity(product, parseInt(e.target.value))
                  }
                />
                <img src={product.image} alt={product.name} />
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </div>
            ))}
          </div>

          <div>Total price: ${getTotalSum()}</div>
        </>
      ) : (
        <h3>Your cart is empty</h3>
      )}
    </>
  );
};

export default Cart;
