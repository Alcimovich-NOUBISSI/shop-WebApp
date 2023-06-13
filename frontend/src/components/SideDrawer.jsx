import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = (props) => {
  let sideDrawerClass = ["SideDrawer"];
  if (props.show) {
    sideDrawerClass.push("show");
  }

  const cartDetail = useSelector((state) => state.cart);
  const { cartItems } = cartDetail;

  const getCartPrice = () => {
    let d = 0;
    cartItems.map((i) => {
      d += (i.qty * i.price)
      return "$ "+d
    })
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
        <ul>
          <li>
            <p>
              <i class="fa fa-cart-shopping me-3"></i>
              <Link to="/cart">
                Cart
              </Link>
              {getCartPrice()}
            </p>
          </li>
          <li>
            <p>
            <i class="fa fa-shop me-3"></i>
              <Link to="/shop"> Shop </Link>
            </p>
          </li>
          <li>
            <p>
              <i class="fa fa-user me-3"></i>
              <Link to="/user"> User </Link>
            </p>
          </li>
          <li>
            <p>
              <i class="fa fa-arrow-right-from-bracket me-3"></i>
              <Link to="/"> Log Out </Link>
            </p>
          </li>
        </ul>
    </div>
  );
};

export default SideDrawer;
