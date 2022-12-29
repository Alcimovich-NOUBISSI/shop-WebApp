import { useState } from "react";

import "./RegisterScreen.css"

import Step1 from "../components/Registration Forms/PesonnalData";
import Step2 from "../components/Registration Forms/Address";
import Step3 from "../components/Registration Forms/ShippingAddress";
import Step4 from "../components/Registration Forms/PaymentData";

const RegisterScreen = () => {

  var [step, gotoStep] = useState(0)

  const onNext = () => {
    gotoStep(step + 1);
  }

  const onPrev = () => {
    gotoStep(step - 1);
  }


  return (
    <>
      {
        step === 0 && <Step1
          nextClick={() => onNext()}
          stepNo={step}
        />
      }

      {
        step === 1 && <Step2
          nextClick={() => onNext()}
          prevClick={() => onPrev()}
          stepNo={step}
        />
      }

      {
        step === 2 && <Step3
          nextClick={() => onNext()}
          prevClick={() => onPrev()}
          stepNo={step}
        />
      }

      {
        step === 3 && <Step4
          prevClick={() => onPrev()}
          stepNo={step}
        />
      }
      
    </>
  );
}

export default RegisterScreen