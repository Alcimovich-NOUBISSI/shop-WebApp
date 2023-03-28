import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios"

const Step1 = (props) => {

    const form = useRef(null)

    const { fname, lname, email, password } = props.data

    const [Fname, setFname] = useState(fname)
    const [Lname, setLname] = useState(lname)
    const [Email, setEmail] = useState(email)
    const [Password, setPassword] = useState(password)
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const [match, checkMatch] = useState(true)

    const sendPersonnalData = (e) => {
        e.preventDefault()
        // axios.post("/checkEmail", Email)
        // .then((response) => console.log(response))


        var data = new FormData(form.current)
        props.set(Object.fromEntries(data))

        if (Password === ConfirmPassword) {
            props.nextClick()
        } else {
            checkMatch(false)
        }
    }

    const [check, setCheck] = useState(true)
    

    return (
        <>
            {props.stepNo === 0 ?
                <div className="row gx-lg-5 align-items-center">

                    <div className="col-lg-6 mb-lg-0 center_form">

                        <div className="card bg-glass mb-0">
                            <div className="card-body">
                                <form className="form"
                                    ref={form}
                                    onSubmit={sendPersonnalData}
                                >
                                    <legend>Personnal Data</legend>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input
                                                    name="fname"
                                                    value={Fname}
                                                    onChange={(e) => setFname(e.target.value)}
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="First Name"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input
                                                    name="lname"
                                                    value={Lname}
                                                    onChange={(e) => setLname(e.target.value)}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            name="email"
                                            value={Email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            required />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            name="password"
                                            value={Password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter your password"
                                            required />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="form-control"
                                            placeholder="Confirm your password"
                                            required />
                                        <small style={(match === false) ? { "display": "block", "textAlign": "left" } : { "display": "none" }}  >*passwords don't match</small>
                                    </div>

                                    <div className="form-outline mb-4 col text-end">
                                        <button
                                            type="submit"
                                            className="btn btn-primary mb-4 w-50"
                                        >
                                            Continue
                                        </button>
                                        {/* <button 
                                                type="submit" 
                                                class="btn btn-primary mb-4 w-50" 
                                                >
                                                Continue
                                            </button> */}
                                    </div>

                                    <div className="">
                                        <div className=" text-start">
                                            <label>Already have an account? <Link to="/login"> Sign In </Link> </label>
                                        </div>
                                        <div className="text-end">
                                            <input 
                                                class="form-check-input me-2" 
                                                type="checkbox" 
                                                value="" 
                                                id="form2Example33"
                                                onClick={()=> setCheck(!check)} 
                                                checked = {check} />
                                            <label class="form-check-label" for="form2Example33">
                                                Subscribe to our newsletter
                                            </label>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div> : null
            }
        </>
    )
}

export default Step1;