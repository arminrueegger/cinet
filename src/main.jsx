import React, {useState} from 'react'
import Home from './Home.jsx'
import {Login} from './Login.jsx'
import {Header} from './Header.jsx'

import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Games} from "./Games.jsx";
import {PointShop} from "./PointShop.jsx";

export default function Main() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [points, setPoints] = useState(0)
    const [phone, setPhone] = useState('')


    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/Login"
                       element={<Login name={name} setName={setName} email={email} setEmail={setEmail} phone={phone}
                                       setPhone={setPhone}/>}></Route>
                <Route path="/Games" element={<Games points={points} setPoints={setPoints}/>}></Route>
                <Route path="/PointShop" element={<PointShop points={points} setPoints={setPoints}/>}></Route>

            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);