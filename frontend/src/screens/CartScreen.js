import "./CartScreen.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//Components
import CartItem from "../components/CartItem";


//actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { useRef, useState } from "react";
import products from "./Product";

const CartScreen = ({ match }) => {
  const dispatch = useDispatch();

  const cartDetail = useSelector((state) => state.cart);
  const { cartItems } = cartDetail;

  const qtyChangehandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartPrice = () => {
    let d = 0;
    cartItems.map((i) => {
      d += (i.qty * i.price)
      return d
    })
  }

  const form = useRef(null)

  const sendData = (e) => {

    var array = new Array()

    products.forEach((product) => {
      array.push({
        "name": product.name,
        "price": product.price
      })
    })


    var data = new FormData(form.current)
    data.append('items', JSON.stringify(array))
    console.log(Object.fromEntries(data));

    // fetch("/postSomething", {
    //     method: "POST",
    //     body: data
    //   })
    //   .then((result) => {if(result.status !== 200) {throw new Error("Bad response !")} return result.text() } )
    //   .then((response)=> {console.log(response);})
    //   .catch((error) => {console.log(error);})

    axios.post("/postSomething", Object.fromEntries(data))
      .then((response) => { console.log(response); })
      .catch((error) => { console.log(error); })

    return false
  }

  const [mean, setMean] = useState("card")


  return (
    <div>
      <form class="p-3" onSubmit={sendData} ref={form} >
        <div className="cartscreen">
          <div className="cartscreen__left">
            {/* <h2> Shopping Cart</h2>
            {
              cartItems.map((x) => {
                return (<CartItem 
                  key={x.product}
                  item={x} 
                  qtyChangeHandler={qtyChangehandler}
                  removeHandler= {removeItem}
                 />)
              })
            } */}

            Shipping address
            <div class="form-group">
              <label for="InputEmail" class="form-label mt-4">Email address</label>
              <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" name="email" />
              <small id="emailHelp" class="form-text text-muted">*we'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="countrySelect" class="form-label mt-4">Country <span class="text-muted">(Required)</span> </label>
              <select class="form-select" id="countrySelect" name="country">
                <option disabled>-- Select a country --</option>
                <option>Cameroon</option>
                <option>France</option>
                <option>Ghana</option>
                <option>Cote d'ivoire</option>
              </select>
            </div>
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label for="State" class="form-label mt-4">State <span class="text-muted">(Optional)</span></label>
                  <select class="form-select" id="State" name="state">
                    <option disabled>-- Select a state --</option>
                    <option>Illinois</option>
                    <option>Lekki</option>
                    <option>Ohio</option>
                    <option>Michigan</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label for="Region" class="form-label mt-4">City / Region <span class="text-muted">(Required)</span>  </label>
                  <select class="form-select" id="State" name="city">
                    <option disabled>-- Select a City / Region --</option>
                    <option>Douala</option>
                    <option>Yaounde</option>
                    <option>Abudja</option>
                    <option>Lgos</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label for="street1" class="form-label mt-4">Street 1 <span class="text-muted">(Required)</span> </label>
                  <input
                    id="street1"
                    type="text"
                    class="form-control"
                    placeholder="Enter Street 1"
                    name="street1"
                    required />
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label for="street2" class="form-label mt-4">Street 2 <span class="text-muted" >(Optional)</span> </label>
                  <input
                    id="street2"
                    type="text"
                    class="form-control"
                    placeholder="Enter Street 2"
                    name="street2" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label for="zip" class="form-label mt-4">Zip code <span class="text-muted">(Required)</span> </label>
                  <input
                    id="zip"
                    type="text"
                    class="form-control"
                    placeholder="Enter Street 1"
                    name="zip"
                    required />
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label class="form-label mt-4">Carrier <span class="text-muted" >(Required)</span> </label>
                  <div class="row">
                    <div class=" col-md-4 form-check">
                      <input class="form-check-input" type="radio" name="carrier" id="amazon" value="amazon" />
                      <div class="col">
                        <i for="amazon" class="fa-brands fa-amazon fa-2x"></i>
                        <div> <small class="text-muted"> (2 days) </small> </div>
                      </div>
                    </div>
                    <div class=" col-md-4 form-check">
                      <input class="form-check-input" type="radio" name="carrier" id="ups" value="ups" />
                      <div class="col">
                        <i for="ups" class="fa-brands fa-ups fa-2x"></i>
                        <div> <small class="text-muted"> (3 days) </small> </div>
                      </div>
                    </div>
                    <div class=" col-md-4 form-check">
                      <input class="form-check-input" type="radio" name="carrier" id="dhl" value="dhl" />
                      <div class="col">
                        <i for="dhl" class="fa-brands fa-dhl fa-3x"></i>
                        <div> <small class="text-muted"> (2 days) </small> </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <div class="cartscreen__right">
            {
              (cartItems.length === 0) ?
                <div class="p-3">
                  <Link to="/shop" class="btn btn-primary">Back to shop</Link>
                </div> :
                <div>
                  {
                    cartItems.map((x) => {
                      return (<CartItem
                        key={x.product}
                        item={x}
                        name="items"
                        qtyChangeHandler={qtyChangehandler}
                        removeHandler={removeItem}
                      />)
                    })
                  }
                  <hr />
                </div>
            }
            <div className="cartscreen__info" class=" p-3">
              <p> Subtotal ({cartItems.length}) {(cartItems.length === 1) ? 'item' : 'items'} </p>
              <div class="form-group mt-1 mb-2">
                <label for="code" class="form-label">Apply promo code <span class="text-muted" >(Optional)</span> </label>
                <input type="text" class="form-control" id="code" aria-describedby="emailHelp" placeholder="Promo code" name="promo" />
                <small id="codeHelp" class="form-text text-muted">*make sure your code is still valid.</small>
              </div>
              {<p>Total: ${getCartPrice()}</p>}
            </div>
            <hr />

            <div>


              <div class="form-outline p-3">
                <select
                  class="mb-3"
                  style={{ "width": "100%" }}
                  name="mean"
                  onChange={(e) => setMean(e.target.value)}
                >
                  <option>-- Choose a payment mean --</option>
                  <option value="card">Card</option>
                  <option value="mobile money">Mobile Money</option>
                </select>

                {mean === "card" ?
                  <fieldset class=" p-3">
                    <div class="row">
                      <div class=" col-md-4 form-check">
                        <input class="form-check-input" type="radio" name="operator" id="operator-visa" value="visa" />
                        <i class="fa-brands fa-cc-visa fa-2x" for="operator-visa"></i>
                      </div>
                      <div class=" col-md-4 form-check">
                        <input class="form-check-input" type="radio" name="operator" id="operator-mc" value="mastercard" />
                        <i class="fa-brands fa-cc-mastercard fa-2x" for="operator-mc"></i>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="card" class="form-label mt-4">Card Number <span class="text-muted" >(Required)</span> </label>
                      <input type="text" class="form-control" id="card" aria-describedby="emailHelp" placeholder="**** - **** - **** - ****" name="card" />
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label for="expiry" class="form-label mt-4">Expiry <span class="text-muted">(Required)</span> </label>
                          <input
                            id="expiry"
                            type="date"
                            class="form-control"
                            placeholder="MM/YY"
                            name="deliveryDate"
                            required />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label for="card" class="form-label mt-4">Card Code <span class="text-muted" >(Required)</span> </label>
                          <input
                            id="card"
                            type="text"
                            class="form-control"
                            placeholder="CVV"
                            name="cvv"
                            required />
                        </div>
                      </div>
                    </div>
                  </fieldset> : null
                }


                {mean === "mobile money" ?
                  <fieldset class=" p-3">
                    <legend>Mobile Money</legend>
                    <div class="row">
                      <div class=" col-md-4 form-check">
                        <input class="form-check-input" type="radio" name="operator" id="operator-om" value="orange money" />
                        <label class="form-check-label" for="operator-om">
                          Orange Money
                        </label>
                      </div>
                      <div class=" col-md-5 form-check">
                        <input class="form-check-input" type="radio" name="operator" id="operator-momo" value="momo" />
                        <label class="form-check-label" for="operator-momo">
                          Mtn Mobile Money
                        </label>
                      </div>
                      <div class=" col-md-3 form-check">
                        <input class="form-check-input" type="radio" name="operator" id="operator-yup" value="yup" />
                        <label class="form-check-label" for="operator-yup">
                          YUP
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="card" class="form-label mt-4">Phone Number <span class="text-muted" >(Required)</span> </label>
                      <input type="text" class="form-control" id="card" aria-describedby="emailHelp" placeholder="Phone number" name="phone" />
                    </div>
                  </fieldset> : null
                }

                <div class=" form-check mb-3 mt-3 ">
                  <input class="form-check-input" type="radio" name="confidentiality" required />
                  <label class="form-check-label">
                    Your personal data will be used to process your order, support your experience throughout this
                    website and for other purposes descibed in our <b>privacy policy</b> and
                    <b> terms and condition*</b>.
                  </label>
                </div>
                {
                  (cartItems.length === 0) ?
                    <button type="submit" class="btn btn-primary" >Place Order</button> :
                    <button type="submit" class="btn btn-primary">Place Order</button>
                }

              </div>

            </div>

          </div>
        </div>
      </form>
    </div>
  );
};

export default CartScreen;

