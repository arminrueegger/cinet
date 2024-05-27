import React, {useState} from 'react'
import Home from './Home.jsx'
import {Login} from './Login.jsx'
import {Header} from './Header.jsx'

import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function Main() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Login" element={<Login name={name} setName={setName} email={email} setEmail={setEmail}/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);