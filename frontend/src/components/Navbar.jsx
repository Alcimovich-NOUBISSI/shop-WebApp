import "./Navbar.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = (props) => {

  const cartDetail = useSelector((state) => state.cart);
  const { cartItems } = cartDetail;

  return (
    <nav className="Navbar">
      <div className="Navbar__logo">
        <Link to="/">
          <h2> Online Shop</h2>
        </Link>
      </div>

      <div className="Navbar__links">
        <ul>
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart" />
              Cart
              <span className="cartlogo__badge"> {cartItems.length}</span>
            </Link>
          </li>

          <li>
            <Link to="/"> Shop </Link>
          </li>
        </ul>
      </div>

      <div className="Navbar__burger" onClick={props.handleClick}>
        <i className="fas fa-bars" />
      </div>
    </nav>
  );
};

export default Navbar;
