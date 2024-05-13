import React, {} from 'react'
import App from './App.jsx'
import './index.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);