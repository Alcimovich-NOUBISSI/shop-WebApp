import "./SideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = (props) => {
  let sideDrawerClass = ["SideDrawer"];
  if (props.show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <div className="SideDrawer__links">
        <ul>
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart" />
              Cart
              <span className="SideDrawer__cartlogo"> 0 </span>
            </Link>
          </li>

          <li>
            <Link to="/"> Shop </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
