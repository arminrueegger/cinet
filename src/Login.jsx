import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css';
import 'bootstrap/dist/js/bootstrap.js'

function login() {
    return (

        <section className="">
            <footer className="text-center text-black background-color-grey">
                <div className="container p-4 pb-0">
                    <section className="">
                        <p className="d-flex justify-content-center align-items-center">
                            <span className="me-3">Register for free</span>
                            <button data-mdb-ripple-init type="button"
                                    className="border-black btn btn-outline-light btn-rounded text-black"
                                    data-bs-toggle="modal"
                                    data-bs-target="#enroll">
                                Sign up!
                            </button>
                        </p>
                    </section>
                </div>


                {/*Modal*/}
                <div
                    className="modal fade"
                    id="enroll"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="enrollLabel">Enrollment</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p className="lead">Fill out this form and we will get back to you</p>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="first-name" className="col-form-label">
                                            First Name:
                                        </label>
                                        <input type="text" className="form-control" id="first-name"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="last-name" className="col-form-label">Last Name:</label>
                                        <input type="text" className="form-control" id="last-name"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="col-form-label">Email:</label>
                                        <input type="email" className="form-control" id="email"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="col-form-label">Phone:</label>
                                        <input type="tel" className="form-control" id="phone"/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="text-center p-3 background-color-grey-dark">
                    © 2024 Copyright:
                    <a className="text-black" href="/"> CINET.com</a>
                </div>
            </footer>
        </section>
    );
}




