import { useRef, useState } from "react"

const Step4 = (props) => {

  const form = useRef(null)

  const { mean, number, expirydate, pan } = props.data

  //const [Mean, setMean] = useState(mean)
  const [Number, setNumber] = useState(number)
  const [Expiry, setExpiry] = useState(expirydate)
  const [PAN, setCVV] = useState(pan)

  const [isRequired, setRequired] = useState(true)

  const sendPayment = (e) => {
    e.preventDefault()
    var data = new FormData(form.current)
    props.set(Object.fromEntries(data))
    props.nextClick()
  }

  function skipStep () {
    console.log(isRequired)
    setRequired(false)
    props.nextClick()
  }

  const [payment, disablePayment] = useState ({
    "card": false,
    "mobile": false
  })

  return (
    <>

      {props.stepNo === 2 ?
        <div class="row gx-lg-5 align-items-center">

          <div class="col-lg-6 mb-5 mb-lg-0 center_form">

            <div class="card bg-glass">
              <div class="card-body">
                <form className="form"
                  ref={form}
                  onSubmit={sendPayment}
                >
                  <button onClick={() => skipStep()}>Skip for now</button>
                  <legend>Payment Data</legend>
                  <div class="form-outline mb-4">
                    <input class="form-check-input me-2"
                      type="radio"
                      name="mean"
                      value="mobile money"
                      id="mean2" />
                    <label class="form-check-label" for="mean2">
                      Mobile Money
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="text"
                      id="form3Example3"
                      name="number"
                      value={Number}
                      onChange={(e) => setNumber(e.target.value)}
                      class="form-control"
                      placeholder="Enter your Phone Number"
                      required={isRequired}
                      disabled = {payment.mobile}
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input 
                      class="form-check-input me-2" 
                      type="radio" 
                      value="card" 
                      name="mean" 
                      id="mean1" 
                      />
                    <label class="form-check-label" for="mean1">
                      Credit Card
                    </label>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="date"
                          id="form3Example1"
                          value={Expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          class="form-control"
                          placeholder="Expiration date"
                          name="expirydate"
                          required={isRequired}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline mb-4">
                        <input type="text"
                          id="form3Example3"
                          name="pan"
                          value={PAN}
                          onChange={(e) => setCVV(e.target.value)}
                          class="form-control"
                          placeholder="Pan last three digits"
                          required={isRequired}
                        />
                      </div>
                    </div>
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
                      <button type="submit" class="btn btn-primary mb-4 w-100">
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

export default Step4;