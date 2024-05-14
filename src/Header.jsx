import {Link} from "react-router-dom";

export function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#2e9378' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Cinet</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item"  style={{ backgroundColor: '#1fa298' }}>
                                <Link className={"nav-link"} to={"/Login"}>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

