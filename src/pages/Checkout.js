import Cart from "../components/Cart"

const Checkout = ({ token, cart, setCart, userData}) => {

    return (<div style={{display:'flex',justifyContent:'center', flexFlow:'column',alignItems:'center'}}>
        <div>
        <h1 className="shoppingCart">Checkout:</h1>
      </div>
        <Cart token={token} cart={cart} setCart={setCart} real={true} userData={userData}/>
    </div>)
}

export default Checkout;