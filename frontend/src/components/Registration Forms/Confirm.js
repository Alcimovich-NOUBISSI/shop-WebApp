
const Confirm = (props) => {
    return (
        <>


            {(props.stepNo === 3) ? 
                <div class="row gx-lg-5 align-items-center mb-5">

                <div class="col-lg-6 mb-5 mb-lg-0 center_form">

                    <div class="card bg-glass ">
                        <div class="card-body">
                            <form className="form"
                                onSubmit={props.submit}
                            >
                                <legend> Confirm</legend>

                                <div class="row">
                                    <div class="col-md-6">
                                        <button
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
                                            Finish
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

export default Confirm