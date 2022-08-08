import "./CartScreen.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Components
import CartItem from "../components/CartItem";

//actions
import {addToCart, removeFromCart } from "../redux/actions/cartActions";

  const CartScreen = ({ match }) => {
  const dispatch = useDispatch();

  const cartDetail = useSelector((state) => state.cart);
  const { cartItems } = cartDetail;

  const qtyChangehandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartPrice = () => {
    let d = 0;
    cartItems.map((i) => {
      d+=(i.qty*i.price)
      return d
    })
  }

  return (
    <div>
      {cartItems.length === 0 ? (
        <Link to="/">
          <p> Your Shop</p>
        </Link>
      ) : (
        <div className="cartscreen">
          <div className="cartscreen__left">
            <h2> Shopping Cart</h2>
            {
              cartItems.map((x) => {
                return (<CartItem 
                  key={x.product}
                item={x} 
                qtyChangeHandler={qtyChangehandler}
                removeHandler= {removeItem}
                 />)
              })
            }
          </div>
          <div className="cartscreen__right">
            <div className="cartscreen__info">
              <p> Subtotal ({cartItems.length}) { (cartItems.length === 1) ?'item':'items'} </p>
              { <p>Total: ${getCartPrice()}</p> }
            </div>
            <div>
              <button>Proceed To Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;

