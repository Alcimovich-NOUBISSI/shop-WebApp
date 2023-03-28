import { useState } from "react";
import axios from "axios";

import "./RegisterScreen.css"

import Step1 from "../components/Registration Forms/PesonnalData";
import Step2 from "../components/Registration Forms/Address";
//import Step3 from "../components/Registration Forms/ShippingAddress";
import Step4 from "../components/Registration Forms/PaymentData";
import Confirm from "../components/Registration Forms/Confirm";

const RegisterScreen = () => {


  var [step, gotoStep] = useState(0)

  const init_info = {
    "fname": "", 
    "lname": "", 
    "email": "", 
    "password": ""
  }

  const init_address = {
    "country": "", 
    "street1": "", 
    "street2": "", 
    "city": "", 
    "state": "", 
    "zip": ""
  }

  const init_payment = {
    "mean": "", 
    "number": "", 
    "expirydate": "", 
    "pan": ""
  }
  
  const [info, setInfo] = useState (init_info)
  const [address, setAddress] = useState (init_address)
  const [payment, setPayment] = useState (init_payment)

  const onNext = () => {
    gotoStep(step + 1)
  }

  const onPrev = () => {
    console.log(info)
    gotoStep(step - 1)
  }

  const sendData = (e) => {
    e.preventDefault()

    const values = {...info, ...address, ...payment}

    var data = new FormData()
    data.append('data', JSON.stringify(values)) 

    console.log( "from entries ", Object.fromEntries(data));

    axios.post("/register",  Object.fromEntries(data))
    .then((response)=> {console.log(response);})
      .catch((error) => {console.log(error);})
    
      return false

  }

  
  return (
    <section id="register">
      <div className="container px-4 px-md-5 pt-5 text-center text-lg-start position-relative">
        <div className="steps">
          <span className="rounded-5 p-3" style={(step > 0 ) ? {backgroundColor: '#008cba'} : {backgroundColor: 'gray'}}></span>
          <span className="rounded-5 p-3" style={(step > 1 ) ? {backgroundColor: '#008cba'} : {backgroundColor: 'gray'}}></span>
          <span className="rounded-5 p-3" style={(step > 2 ) ? {backgroundColor: '#008cba'} : {backgroundColor: 'gray'}}></span>
        </div>

        {
          step === 0 && <Step1
            nextClick={() => onNext()}
            stepNo={step}
            set = {setInfo}
            data = {info}
          />
        }

        {
          step === 1 && <Step2
            nextClick={() => onNext()}
            prevClick={() => onPrev()}
            stepNo={step}
            set = {setAddress}
            data = {address}
          />
        }

        {/* Shipping Address */}
        {/* {
          step === 2 && <Step3
            nextClick={() => onNext()}
            prevClick={() => onPrev()}
            stepNo={step}
          />
        } */}

        {
          step === 2 && <Step4
            nextClick={() => onNext()}
            prevClick={() => onPrev()}
            stepNo={step}
            set = {setPayment}
            data = {payment}
          />
        }

        {
          step === 3 && <Confirm
            prevClick={() => onPrev()}
            stepNo={step}
            data = {payment}
            submit = {sendData}
          />
        }
      </div>
      
      
    </section>
  );
}

export default RegisterScreen