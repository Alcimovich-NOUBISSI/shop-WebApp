import "./Navbar.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = (props) => {

  const cartDetail = useSelector((state) => state.cart);
  const { cartItems } = cartDetail;

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <Link class="navbar-brand col-2" to="/">Online Shop</Link>
        <form class="d-flex col-6">
            <input class="form-control" type="search" placeholder="Enter a keyword..."/>
            <button class="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarColor01">
          <ul class="navbar-nav">
            <li class="nav-item row align-items-center" >
              <Link to="/cart">
                    <span class="fa-stack fa-1x has-badge" data-count={cartItems.length}>
                    <i class="fa fa-stack-1x fa-bell red-cart"></i>
                    </span>
              </Link>
            </li>
            <li class="nav-item row align-items-center">
              <Link to="/cart">
                    <span 
                    class="fa-stack fa-1x has-badge"  
                    data-count={cartItems.length}>
                      <i class="fa fa-shopping-cart fa-stack-1x red-cart"></i>
                    </span>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link to="/" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Hello Isidore !</Link>
              <div class="dropdown-menu">
                <Link to="/" class="dropdown-item" href="#">Action</Link>
                <Link to="/" class="dropdown-item" href="#">Another action</Link>
                <Link to="/" class="dropdown-item" href="#">Something else here</Link>
                <div class="dropdown-divider"></div>
                <Link to="/" class="dropdown-item" href="#">Separated link</Link>
              </div>
            </li>
            <li>
              <img alt="avatar" class="rounded-circle" className='avatar' src='IMG_20210829_130515.jpg' />
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* <form class="d-flex col-9 mt-2" style={{"position": "absolute"}}>
        <input class="form-control" type="search" placeholder="Enter a keyword..."/>
        <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
    </form> */}
</>
  );
};

export default Navbar;
