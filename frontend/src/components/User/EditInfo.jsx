import "./EditInfo.css";

import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const EditInfo = (props) => {
  const form = useRef(null);

  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [Country, setCountry] = useState("");

  const sendPersonnalData = (e) => {
    e.preventDefault();
    // axios.post("/checkEmail", Email)
    // .then((response) => console.log(response))

    var data = new FormData(form.current);
    props.set(Object.fromEntries(data));

    
  };

  return (
    <>
      <div className="mb-3">
        <h4>Edit info</h4>
      </div>

      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-lg-0">
          <div className="card bg-glass mb-0 mt-0">
            <div className="card-body">
              <form className="form" ref={form} onSubmit={sendPersonnalData}>
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
                        required
                      />
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
                        required
                      />
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
                    required
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="number"
                    value={Number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    onChange={(e) => setCountry(e.target.value)}
                    className="form-control"
                    placeholder="Country"
                    required
                  />
                  
                </div>

                <div className="form-outline mb-4 col text-end">
                  <button type="submit" className="btn btn-primary mb-4 w-50">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditInfo;
