import "./Newsletter.css";

import { Link } from "react-router-dom";

import { useState } from "react";

const Newsletter = () => {


	const [click, setClicked] = useState(false)

  return (
    <div class="bg-grey background" style={  {"display" : click ? "none" : "block"} } >
      <div class="container">
        <div class="row justify justify-content-center">
          <div class="col-12 col-lg-9 col-xl-8">
            <form class="">
              <div class="card">
                <div class="row justify-content-center">
                  <div class="col-md-9 col-11">
                    <div class="row mt-0">
                      <div class="col-md-12 ">
                        <h4 class="text-center heading">get 10% off</h4>
                        <p class="text-center sub-heading">
                          subscribe to our newsletter & receive a coupon
                        </p>
                      </div>
                    </div>

                    <div class="form-group row mb-3">
                      <div class="col-md-12 mb-0">
                        <input
                          id="e-mail"
                          type="text"
                          placeholder="ENTER YOUR EMAIL"
                          name="email"
                          class="form-control input-box rm-border text-center"
                        />
                      </div>
                    </div>

                    <div class="form-group row justify-content-center mb-0">
                      <div class="col-md-12 px-3 text-center">
                        <input
                          type="submit"
                          value="GET IT NOW!"
                          class="btn btn-block btn-black rm-border"
                        />
                      </div>
                    </div>

                    <div class="form-group row justify-content-center mb-0">
                      <div class="col-md-12 px-3 mt-4">
                        <Link to="#" onClick={() => setClicked(true)}>
                          <p class="thanks">no thanks</p>
                        </Link>
                      </div>
                    </div>

                    <div class="form-group row justify-content-center mb-0">
                      <div class="col-md-12 px-3">
                        <p class="conditions">* $50 minimum purchase</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
