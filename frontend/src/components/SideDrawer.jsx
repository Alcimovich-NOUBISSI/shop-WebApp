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
      <div className="SideDrawer__links">
        <ul>
          <li>
            <Link to="/cart">
              Cart
              <span className="SideDrawer__cartlogo"> {getCartPrice()} </span>
            </Link>
          </li>
          <li>
            <Link to="/shop"> Shop </Link>
          </li>
          <li>
            <Link to="/user"> User </Link>
          </li>
          <li>
            <Link to="/"> Log Out </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
