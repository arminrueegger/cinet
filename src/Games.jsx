import React from 'react';
import "./shopRow.css" ;

export function Games({ points, setPoints }) {
    const handlePointChange = (event) => {
        setPoints(points + 200)
    }

    return (
        <>

            <h1 className="title">Games</h1>
            <h3 className="smallTitle"> Points: {points}</h3>
            <div className="container">
                <div className="flex-container">
                    <div className="flex-item">
                        <img src="https://thelogicalindian.com/h-upload/2021/03/17/192284-thelogicalindianfb1000x600-1.jpg" alt="Pacman" />
                        <div className="game-title">Pacman</div>
                        <a className="play-button" onClick={handlePointChange}>Spielen</a>
                    </div>
                    <div className="flex-item">
                        <img src="https://img.gamepix.com/games/snow-rider-3d/cover/snow-rider-3d.png?w=400" alt="Snow Rider" />
                        <div className="game-title">Snow Rider</div>
                        <a className="play-button" onClick={handlePointChange}>Spielen</a>
                    </div>
                    <div className="flex-item">
                        <img src="https://images.squarespace-cdn.com/content/v1/5cedd5e7c6e7df0001bbb67c/1564551973622-EE9YJORD9OFXPKW9NYKW/Banner_Video_Cover.jpg?format=2500w" alt="Crossy Road" />
                        <div className="game-title">Crossy Road</div>
                        <a className="play-button" onClick={handlePointChange}>Spielen</a>
                    </div>
                </div>
            </div>
        </>
    );
}
