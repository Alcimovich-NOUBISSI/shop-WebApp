
import { Link } from "react-router-dom";
import "./LoginScreen.css"
import { useState } from "react";
import axios from "axios";


const LoginScreen = () => {

  
  const [mail, setMail]= useState("")
  const [pwd, setPwd]= useState("")
  const handleLogin = () => {
    axios.post('/login', {
      "email": mail,
      "password": pwd
    }).then((res) => {
      localStorage.setItem({
        "email": res.data.email
      })
      if (res.status === 303) {
        axios.get("/")
      }

    }).catch((err) => console.log(err))
  }
  const [check, setCheck] = useState(true)

  return (
    <section id="login" class="background-radial-gradient overflow-hidden">
      <div class="container px-4 px-md-5 text-center text-lg-start ">
        <div class="row gx-lg-5 align-items-center ">
          <div class="col-lg-6  mb-lg-0">
            <h1 class="my-5 display-5 fw-bold ls-tight" style={{ "color": "hsl(218, 81%, 85%)" }}>
              The best offers <br />
              <span style={{ "color": "hsl(218, 81%, 75%)" }}>for you in one place</span>
            </h1>
            <p class="mb-4 opacity-70" style={{ "color": "hsl(218, 81%, 85%)" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div class="col-lg-6 mb-lg-0 position-relative">

            <div class="card bg-glass">
              <div class="card-body">
                <form className="form" onSubmit={handleLogin} >

                  <div class="form-outline mb-4">
                    <input 
                      type="email" 
                      class="form-control" 
                      placeholder="Enter your email" 
                      name="email" 
                      onChange={(e) => setMail(e.target.value)} 
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input 
                      type="password" 
                      class="form-control" 
                      placeholder="Enter your password" 
                      name="password" 
                      onChange={(e) => setPwd(e.target.value)} 
                    />
                  </div>

                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Sign in
                  </button>

                  <div class="text-center my-3">
                    <p>or</p>
                    <button type="button" class="btn btn-outline-info p-3 mx-2 ">
                      <i class="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" class="btn btn-outline-info p-3 mx-1">
                      <i class="fab fa-google"></i>
                    </button>

                    <button type="button" class="btn btn-outline-info p-3 mx-1">
                      <i class="fab fa-twitter"></i>
                    </button>

                    <button type="button" class="btn btn-outline-info p-3 mx-1">
                      <i class="fab fa-github"></i>
                    </button>
                  </div>

                  <div class="row align-items-end mt-5">
                    <div class="col-md-6 text-start">
                      <span>No account? <Link to="/register"> Register </Link> </span>
                    </div>
                    <div class="col-md-6 text-end">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="newsletter"
                        onClick={() => setCheck(!check)}
                        checked={check}
                      />
                      <label class="form-check-label" for="newsletter">
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
  );
}

export default LoginScreen;