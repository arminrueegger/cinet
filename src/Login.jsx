import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import {useState} from "react";

export function Login({name, setName, email, setEmail, phone, setPhone}) {
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }

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
                <div className="modal fade" id="enroll">
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
                                        <label htmlFor="last-name" className="col-form-label">Full Name:</label>
                                        <input type="text" className="form-control" id="last-name"
                                               onChange={handleNameChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="col-form-label">Email:</label>
                                        <input type="email" className="form-control" id="email"
                                               onChange={handleEmailChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="col-form-label">Phone:</label>
                                        <input type="tel" className="form-control" id="phone"
                                               onChange={handlePhoneChange}
                                        />

                                    </div>
                                </form>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"
                                            onClick={handleAvatarChange}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}




