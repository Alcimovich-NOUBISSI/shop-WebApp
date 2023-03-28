import { useRef, useState } from "react"
import Options from "../Options"

import axios from "axios"


const Step2 = (props) => {

    
    const form = useRef(null)

    const { country, street1, street2, city, state, zip } = props.data

    const [Country, setCountry] = useState(country)
    const [Street1, setStreet1] = useState(street1)
    const [Street2, setStreet2] = useState(street2)
    const [City, setCity] = useState(city)
    const [State, setState] = useState(state)
    const [Zip, setZip] = useState(zip)

    const [isRequired, setRequired] = useState(true)

    const sendAddress = (e) => {
        e.preventDefault()
        var data = new FormData(form.current)
        props.set(Object.fromEntries(data))
        props.nextClick()
    }

    const [countriesList, setCountriesList] = useState({})

    const matchRegex = (substring) => {
        return new RegExp(`${substring}.*?`)
    }

    var array = new Array()
    const countries = (substring) => {
        
        axios.get("https://restcountries.com/v3.1/all")
        .then((res)=> {
            var data = res.data.filter(e => {
                return(
                    matchRegex(substring).test(e.name.common)
                )
            })
            data.forEach(e=> {
                array.push(e.name.common)
                setCountriesList({...array})
            })
            
        })
        .catch((err) => console.log(err))
    }

    const handleSkip = () => {
        setRequired(false)
        props.nextClick()
    }

    return (
        <>
            {props.stepNo === 1 ?

                <div class="row gx-lg-5 align-items-center">

                    <div class="col-lg-6 mb-5 mb-lg-0 center_form">

                        <div class="card bg-glass mt-2 mb-0">
                            <div class="card-body">
                                <form className="form"
                                    ref={form}
                                    onSubmit={sendAddress}
                                >
                                    <button type="button" onClick={() => handleSkip()} >Skip for now</button>
                                    <legend> Address</legend>

                                    <div class="form-outline mb-4" style={{ position: 'relative' }}>
                                        <input
                                            name="country"
                                            value={Country}
                                            onChange={(e) => {
                                                setCountry(e.target.value)
                                                console.log(Country)
                                                countries("Fr")
                                                console.log(array);
                                            }}
                                            type="text"
                                            class="form-control"
                                            placeholder="Enter your Country"
                                            required={isRequired}
                                        />
                                        <Options 
                                            countries = {array}
                                        />
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input
                                                    name="street1"
                                                    value={Street1}
                                                    onChange={(e) => setStreet1(e.target.value)}
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Street 1"
                                                    required={isRequired}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input
                                                    name="street2"
                                                    value={Street2}
                                                    onChange={(e) => setStreet2(e.target.value)}
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Street 2"
                                                    required={isRequired}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-outline mb-4" style={{ position: 'relative' }}>
                                        <input
                                            name="city"
                                            value={City}
                                            onChange={(e) => setCity(e.target.value)}
                                            type="text"
                                            class="form-control"
                                            placeholder="Enter your City"
                                            required={isRequired}
                                        />
                                        {/* <Options /> */}
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input
                                            name="state"
                                            value={State}
                                            onChange={(e) => setState(e.target.value)}
                                            type="text"
                                            class="form-control"
                                            placeholder="State" />
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input
                                            name="zip"
                                            value={Zip}
                                            onChange={(e) => setZip(e.target.value)}
                                            type="text"
                                            class="form-control"
                                            placeholder="Zip" />
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

export default Step2;