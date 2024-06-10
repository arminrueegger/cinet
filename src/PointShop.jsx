import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import "./shopRow.css" ;
import React from "react";

export function PointShop({points, setPoints}) {
    const handlePointChangeTicket = (event) => {
        setPoints(points - 200)
    }
    const handlePointChangeVIP = (event) => {
        setPoints(points - 1000)
    }
    const handlePointChangeGetreanke = (event) => {
        setPoints(points - 100)
    }

    return (
        <>
            <h1 className="title">Pointshop</h1>
            <h3 className="smallTitle"> Points: {points}</h3>

            <div className="container">
                <div className="flex-container">
                    <div className="flex-item">
                        <img
                            src="src/assets/kinoTicket.png"
                            alt="kino Tickets"/>
                        <div className="game-title">Gratis Ticket</div>
                        <a className="play-button" onClick={handlePointChangeTicket}>200 Points</a>
                    </div>
                    <div className="flex-item">
                        <img src="src/assets/Getreanke.jpeg"
                             alt="Getreanke"/>
                        <div className="game-title">Gratis Getreanke</div>
                        <a className="play-button" onClick={handlePointChangeGetreanke}>100 Points</a>
                    </div>
                    <div className="flex-item">
                        <img
                            src="src/assets/VIPTicket.jpeg"
                            alt="VIP Ticket"/>
                        <div className="game-title">VIP Ticket</div>
                        <a className="play-button" onClick={handlePointChangeVIP}>1000 Points</a>
                    </div>
                </div>
            </div>
        </>
    );
}