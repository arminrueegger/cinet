import {Link} from "react-router-dom";

export function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#ffffff' }}>
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/"}>
                                    <img src="assets/CinetLogo.jpg"
                                         width="30"
                                         height="30"
                                         className="d-inline-block align-top"
                                         alt=""/>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/"}>Home</Link>
                            </li>

                            <li className="nav-item" style={{backgroundColor: '#ffffff'}}>
                                <Link className={"nav-link"} to={"/Login"}>Login</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/Games"}>Games</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

