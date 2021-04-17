import Cart from "../components/Cart"

const Checkout = ({ token, cart, setCart }) => {

    return (<div style={{display:'flex',justifyContent:'center', flexFlow:'column',alignItems:'center'}}>
        <div>
        <h1 className="shoppingCart">Checkout:</h1>
      </div>
        <Cart token={token} cart={cart} setCart={setCart} real={true} />
    </div>)
}

export default Checkout;