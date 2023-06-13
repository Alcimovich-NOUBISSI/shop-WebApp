import "./Orders.css";

import OrderItems from "./OrderItems";
import products from "../../screens/Product";

const Orders = () => {
  const handleCancelation = () => {
    alert("Do you realy want to cancel this order ?");
  };

  return (
    <div>
      <div className="mb-3">
        <h4>Orders List</h4>
      </div>
      <div class="accordion" id="accordion">
        <div class="accordion-item">
          <div class="accordion-header" id="headingOne">
            <div
              class="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="header">
                <p> Id: 321546 </p>
                <p class="badge rounded-pill bg-dark">$230 </p>
                <p> 2/03/2023</p>
                <p>UPS</p>
                <p class="badge rounded-pill bg-success">pending</p>
              </div>
            </div>
          </div>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {products.map((prod) => {
                return (
                  <OrderItems
                    imageUrl="./IMG_20210829_130515.jpg"
                    name={prod.name}
                    price={prod.price}
                  />
                );
              })}
              <button onClick={() => handleCancelation}>Close</button>
            </div>
          </div>
        </div>

        {/* <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Orders;
