import {Link} from "react-router-dom";

export function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#ffffff' }}>
                <div className="container-fluid">
                    <img className="img-fluid" style={{width: '13%', height: "auto"}} src="src/assets/CinetLogo.jpg" alt="Image Description"/>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/Games"}>Games</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/PointShop"}>PointShop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/Login"}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/Profil"}>Profil</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

