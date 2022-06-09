import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setsideToggle] = useState(false);

  function renderSidebar() {
    setsideToggle(true)
  }

  return (
    <Router>
    <Navbar handleClick={()=>{
      renderSidebar()
    }} />
    <SideDrawer show={sideToggle} />
    <Backdrop show={sideToggle} handleClick={()=>{
      setsideToggle(false);
    }} />
      <main>
        <Switch>
         <Route exact path="/" component={HomeScreen}/>
         <Route exact path="/product/:id" component={ProductScreen}/>
         <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;


/*{loading ? (
  <h2>Loading...</h2>
) : error ? (
  <h2> {error} </h2>
) : (
  <div>
    <div className="productscreen__left">
      <div className="left__image">
        <img src={product.imageUrl} alt={product.name} />
      </div>

      <div className="left__info">
        <p className="left__name">{product.name}</p>
        <p> Price: {product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>

    <div className="productscreen__right">
      <div className="right__info">
        <p>
          Price: <span> {product.price}</span>
        </p>
        <p>
          Status: <span> In Stock</span>
        </p>
        <p>
          Qty
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </p>

        <p>
          <button type="button"> Add to Cart</button>
        </p>
      </div>
    </div>
  </div>
)}*/