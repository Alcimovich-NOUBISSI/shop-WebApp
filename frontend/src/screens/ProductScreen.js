import "./ProductScreen.css";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Actions
import { getProductDetails } from "../redux/actions/productAction";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetail = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetail;


  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id),
      );
    }
  }, [dispatch, product, match]);

 
  function addToCartHandler () {
    history.push("/cart")
    dispatch(addToCart(product._id, qty));
  }

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2> {error} </h2>
      ) : (
        <div className="productscreen">
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>

            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p> Price: ${product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>

          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price: <span> ${product.price*qty}</span>
              </p>
              <p>
                Status:{" "}
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => {
                  setQty(e.target.value)
                }}>
                  {[...Array(product.countInStock).keys()].map((x) => {
                    return (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    );
                  })}
                </select>
              </p>

              <p>
                  <button type="button" class="btn btn-primary" onClick = {addToCartHandler}>Add to Cart</button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
