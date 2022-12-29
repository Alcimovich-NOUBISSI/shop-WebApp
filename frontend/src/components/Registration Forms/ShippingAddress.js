import { useRef } from "react"

  const Step3 = (props) => {

    const countryRef = useRef(null);
    const street1Ref = useRef(null);
    const street2Ref = useRef(null);
    const cityRef = useRef(null);

    const validation = () => {
        if(
            (countryRef.current.value != null) && 
            (street1Ref.current.value != null) && 
            (street2Ref.current.value != null) &&
            (cityRef.current.value != null) 
        ) {
            props.nextClick()
        }
    }

    return (
      <section 
        class="background-radial-gradient overflow-hidden" 
          style={(props.stepNo === 2)? {"display": "block"}:{"display": "none"}}
        >

        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div class="row gx-lg-5 align-items-center mb-5">

            <div class="col-lg-6 mb-5 mb-lg-0 position-relative center_form">
              <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

              <div class="card bg-glass rounded-4">
                <div class="card-body px-4 py-5 px-md-5">
                  <form className="form" onSubmit={(e)=> e.preventDefault()}>
                  <legend>Shipping Address</legend>
                    <div class="form-outline mb-4">
                      <input 
                        ref={countryRef}
                        type="text"
                        class="form-control" 
                        placeholder="Enter your Country" 
                        required/>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input 
                            ref={street1Ref}
                            type="text" 
                            class="form-control" 
                            placeholder="Street 1" 
                            required/>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input 
                            ref={street2Ref}
                            type="text" 
                            class="form-control" 
                            placeholder="Street 2" 
                            required/>
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <input 
                        ref={cityRef}
                        type="text" 
                        class="form-control" 
                        placeholder="Enter your City" 
                        required/>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="text" class="form-control" placeholder="State" />
                    </div>

                    <div class="form-outline mb-4">
                      <input type="text" class="form-control" placeholder="Zip" />
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
                        <button 
                          type="submit" 
                          class="btn btn-primary mb-4 w-100"
                          onClick={()=> {validation()}}
                          >
                          Continue
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

  export default Step3;