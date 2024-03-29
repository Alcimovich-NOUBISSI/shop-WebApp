import "./CartItem.css";

import { Link } from "react-router-dom";


const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <Link to={`/product/${item.product}`} className="cartitem__name">
        <p>{item.name}</p>
      </Link>

      <select
        className="cartitem__select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => {
          return (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          );
        })}
      </select>

      <p className="cartitem__price"> <span class="badge bg-secondary rounded-pill">${item.price* item.qty}</span></p>

      <button 
      className="cartitem__deleteBtn"
      onClick= {()=> removeHandler(item.product)}
      >
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
