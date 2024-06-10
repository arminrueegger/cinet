import {Link} from "react-router-dom";
import "./profile-style.css";
import {useEffect} from "react";

export function Profile({name, setName, email, setEmail, phone, setPhone}) {
    return (
        <>
            <div className="profile">

                <img className="img-Armin" src="src/assets/RüeggerArmin.jpg" alt={"Profile Picture"}/>

                <h1 className="profil-details">{name}</h1>
                <h1 className="profil-details">{email}</h1>
                <h1 className="profil-details">{phone}</h1>

            </div>

        </>
    )
}
