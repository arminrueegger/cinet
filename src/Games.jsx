import React from 'react';
import { Link } from 'react-router-dom';

export function Games({ points, setPoints }) {
    const handlePointChange = (event) => {
        setPoints(points + 200)
    }

    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Anta&family=
                Archivo+Black&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;
                0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                {`
                .title{
                font-size: 3rem;
                text-align: center;
                margin-top: 5%;
                margin-bottom: 5%;
                font-family: "Archivo Black", sans-serif;
                font-weight: bold;
                }
                
                .flex-container {
                    display: flex;
                    justify-content: space-around;
                }
                .flex-item {
                    margin: 10px;
                    flex: 1 1 calc(33.33% - 20px);
                    box-sizing: border-box;
                    text-align: center;
                    border: 1px solid black;
                    padding: 10px;
                    border-radius: 5px;
                }
                .flex-item img {
                    max-width: 100%;
                    height: auto;
                    display: block;
                }
                .game-title {
                    margin-top: 10px;
                    font-size: 1.2em;
                    font-weight: bold;
                }
                .play-button {
                    margin-top: 5px;
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-block;
                    
                }
                .play-button:hover {
                    background-color: #0056b3;
                }
                
                
                
                `}
            </style>

            <h1 className="title">Games</h1>

            <div className="container">
                <div className="flex-container">
                    <div className="flex-item">
                        <img src="https://thelogicalindian.com/h-upload/2021/03/17/192284-thelogicalindianfb1000x600-1.jpg" alt="Pacman" />
                        <div className="game-title">Pacman</div>
                        <a className="play-button">Spielen</a>
                    </div>
                    <div className="flex-item">
                        <img src="https://img.gamepix.com/games/snow-rider-3d/cover/snow-rider-3d.png?w=400" alt="Snow Rider" />
                        <div className="game-title">Snow Rider</div>
                        <a className="play-button">Spielen</a>
                    </div>
                    <div className="flex-item">
                        <img src="https://images.squarespace-cdn.com/content/v1/5cedd5e7c6e7df0001bbb67c/1564551973622-EE9YJORD9OFXPKW9NYKW/Banner_Video_Cover.jpg?format=2500w" alt="Crossy Road" />
                        <div className="game-title">Crossy Road</div>
                        <a className="play-button" onClick={handlePointChange}>Spielen</a>
                        <h1>Points: {points}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
