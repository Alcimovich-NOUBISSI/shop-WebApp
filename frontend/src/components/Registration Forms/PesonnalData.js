import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const Step1 = (props) => {

    const fNameRef = useRef(null);
    const lNameRef = useRef(null);
    const emailRef = useRef(null);
    
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmedPassword] = useState("");

    const [match, checkMatch] = useState(true)

    const validation = () => {

        console.log(password);
        console.log(confirmPassword);

        if(
            (fNameRef.current.value != null) && 
            (lNameRef.current.value != null) && 
            (emailRef.current.value != null) &&
            (password != null) &
            (confirmPassword != null)
        ) {
            props.nextClick()
        }
    }

    return (
        <section class="background-radial-gradient overflow-hidden"
            style={(props.stepNo === 0)? {"display": "block"}:{"display": "none"}}
        >

            <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div class="row gx-lg-5 align-items-center mb-5">

                    <div class="col-lg-6 mb-5 mb-lg-0 position-relative center_form">
                        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

                        <div class="card bg-glass rounded-4">
                            <div class="card-body px-4 py-5 px-md-5">
                                <form className="form" onSubmit={(e)=> e.preventDefault()}>
                                    <legend>Personnal Data</legend>
                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input 
                                                    ref={fNameRef}
                                                    type="text" 
                                                    class="form-control" 
                                                    placeholder="First Name" 
                                                    required/>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input 
                                                    ref={lNameRef}
                                                    type="text" 
                                                    class="form-control" 
                                                    placeholder="Last Name" 
                                                    required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input 
                                            ref={emailRef}
                                            type="email" 
                                            class="form-control" 
                                            placeholder="Enter your email" 
                                            required/>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input 
                                            onChange={(e)=> setPassword(e.target.value)}
                                            type="password" 
                                            class="form-control" 
                                            placeholder="Enter your password" 
                                            required/>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input 
                                            onChange={(e)=> setConfirmedPassword(e.target.value)}
                                            type="password" 
                                            class="form-control" 
                                            placeholder="Confirm your password" 
                                            required/>
                                        <label style = {(match === false)? {"display":"block"}:{"display":"none"} }  > *passwords don't match</label>
                                    </div>

                                    <div class="form-outline mb-4 col text-end">
                                        <button 
                                            type="submit" 
                                            class="btn btn-primary mb-4 w-50" 
                                            onClick={()=> { validation() }}
                                            >
                                            Continue
                                        </button>
                                    </div>

                                    <div class="row align-items-end mt-5">
                                        <div class="col-md-6 text-start">
                                            <span>Already have an account? <Link to="/login"> Sign In </Link> </span>
                                        </div>
                                        <div class="col-md-6 text-end">
                                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                                            <label class="form-check-label" for="form2Example33">
                                                Subscribe to our newsletter
                                            </label>
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

export default Step1;