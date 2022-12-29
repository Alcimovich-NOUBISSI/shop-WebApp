import "./Products.css";
import { Link } from "react-router-dom";

const Products = (props) => {
  return (
      <div className="product__content">
        <img
          src= {props.imageUrl}
          alt="product name"
        />

        <div className="product__info">
          <p className="info__name"><b>{props.name}</b></p>
          <p className="info__description"> {props.description.substring(200,0)} 
             <Link to = {`/product/${props.Id}`} >  
             <b> more... </b> 
             </Link>
          </p>

          <p className="info__price">${props.price}</p>
          <Link to={`/product/${props.Id}`} class="btn btn-primary">
          <i class="fa fa-eye" aria-hidden="true"></i> View
          </Link>
        </div>
      </div>

    
    
  );
};

export default Products;
