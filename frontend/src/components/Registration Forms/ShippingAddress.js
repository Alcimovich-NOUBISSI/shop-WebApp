import { useRef } from "react"

const Step3 = (props) => {

  const form = useRef(null);

  const sendShippingAddress = (e) => {
    e.preventDefault()
    var data = new FormData(form.current)
    console.log(Object.fromEntries(data))
    props.set(Object.fromEntries(data))
    props.nextClick()
  }

  return (
    <>

      {props.stepNo === 2 ? <div class="row gx-lg-5 align-items-center">

        <div class="col-lg-6 mb-5 mb-lg-0 center_form">

          <div class="card bg-glass mt-2 mb-0">
            <div class="card-body ">
              <form className="form"
                ref={form}
                onSubmit={sendShippingAddress}
              >
                <legend>Shipping Address</legend>
                <div class="form-outline mb-4">
                  <input
                    name="shippingAddress"
                    type="text"
                    class="form-control"
                    placeholder="Enter your Country"
                    required />
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        name=""
                        type="text"
                        class="form-control"
                        placeholder="Street 1"
                        required />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Street 2"
                        required />
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your City"
                    required />
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
                      onClick={() => { props.prevClick() }}
                    >
                      Go Back
                    </button>
                  </div>
                  <div class="col-md-6 ">
                    <button
                      type="submit"
                      class="btn btn-primary mb-4 w-100"
                    >
                      Continue
                    </button>
                  </div>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div> : null}
    </>
  )
}

export default Step3;