import {Link} from "react-router-dom";
import "./profile-style.css";

export function Profile({name, setName, email, setEmail, phone, setPhone}) {

    return (
        <>
            <img src="src/assets/RüeggerArmin.jpg" alt={"Profile Picture"}/>

            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>

        </>
    )
}
