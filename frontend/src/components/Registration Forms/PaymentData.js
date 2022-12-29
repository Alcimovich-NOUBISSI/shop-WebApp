

const Step4 = (props) => {
    return (
      <section class="background-radial-gradient overflow-hidden"
        style={(props.stepNo === 3)? {"display": "block"}:{"display": "none"}}
      >

        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div class="row gx-lg-5 align-items-center mb-5">

            <div class="col-lg-6 mb-5 mb-lg-0 position-relative center_form">
              <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

              <div class="card bg-glass rounded-4">
                <div class="card-body px-4 py-5 px-md-5">
                  <form className="form" >
                    <legend>Payment Data</legend>
                    <div class="form-outline mb-4">
                      <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                      <label class="form-check-label" for="form2Example33">
                        Mobile Money
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="number" id="form3Example3" class="form-control" placeholder="Enter your Phone Number" required/>
                    </div>

                    <div class="form-outline mb-4">
                      <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                      <label class="form-check-label" for="form2Example33">
                        Credit Card
                      </label>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1" class="form-control" placeholder="Expiration Month" required/>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example2" class="form-control" placeholder="Expiration Year" required/>
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="text" id="form3Example3" class="form-control" placeholder="Pan last four digit" required/>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <button 
                          type="submit" 
                          class="btn btn-light btn-block mb-4 w-100"
                          onClick={()=> {props.prevClick()}}
                          >
                          Go Back
                        </button>
                      </div>
                      <div class="col-md-6 ">
                        <button type="submit" class="btn btn-primary mb-4 w-100">
                          Save
                        </button>
                      </div>
                    </div>

                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }

  export default Step4;