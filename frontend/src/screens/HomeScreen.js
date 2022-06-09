import "./HomeScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

//components
import Products from "../components/Products";

//actions
import { getProducts as listProducts } from "../redux/actions/productAction";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


  return (
    <div className="homescreen">
      <h2 className="homescreen__title"> Latest Products</h2>
        {loading ? (
          <FontAwesomeIcon 
            icon= {faSpinner} 
            size="2x" 
            style={{marginLeft : 'auto', marginRight : 'auto'}} 
            spin 
          />
        ) : error ? (
          <h2> {error} </h2>
        ) : (
        <div className="homescreen__products"> 
          {
            products.map((product, id) => { 
              return (
                <Products 
                  key = {id}
                  imageUrl= {product.imageUrl}
                  name= {product.name}
                  description= {product.description}
                  price= {product.price}
                  Id= {product._id}
                />
                ) 
            })
          }
          </div>
        )}
      </div>
  );
};

export default HomeScreen;
