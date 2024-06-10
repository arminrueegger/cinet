import { useState } from 'react';
import {Link} from "react-router-dom";

function Home() {
    const images = [
        'src/assets/SlideshowFoto1.jpeg',
        'src/assets/SlideshowFoto2.jpeg',
        'src/assets/SlideshowFoto3.jpeg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
    };

    const handleNext = () => {
        const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    };

    const movies = [
        {
            title: "Bad Boys: Ride or Die",
            poster: "src/assets/CinetMovie1.jpg",
            description: "Im Kino ab dem 5. Juni",
        },
        {
            title: "Fall Guy",
            poster: "src/assets/CinetMovie2.jpg",
            description: "Im Kino ab dem 3. Mai",
        },
        {
            title: "Challengers",
            poster: "src/assets/CinetMovie3.jpg",
            description: "Im Kino ab dem 25. April",
        },
    ];

    return (
        <>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
                .slideshow-container {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                }
                .slideshow-image {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    transition: opacity 1s ease-in-out;
                }
                .prev, .next {
                    cursor: pointer;
                    position: absolute;
                    top: 48%;
                    width: auto;
                    padding: 16px;
                    margin-top: -22px;
                    color: white;
                    font-weight: bold;
                    font-size: 18px;
                    transition: background-color 0.6s ease;
                    background-color: rgba(0, 0, 0, 0.5);
                    user-select: none;
                }
                .next {
                    right: 10px;
                }
                .prev {
                    left: 10px;
                }
                .prev:hover, .next:hover {
                    background-color: rgba(0, 0, 0, 0.8);
                }
                .movies-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    padding: 20px;
                }
                .movie {
                    flex: 1 0 21%; 
                    margin: 10px;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    transition: transform 0.2s;
                }
                .movie:hover {
                    transform: scale(1.05);
                }
                .movie img {
                    width: 100%;
                    height: auto;
                }
                .movie-details {
                    padding: 15px;
                    text-align: center;
                }
                .movie-title {
                    font-size: 1.5em;
                    margin: 10px 0;
                }
                .movie-description {
                    font-size: 1em;
                    color: #555;
                }
                .col{
                    font-size: 300%;
                    margin-top: -12%;
                }
                .col-sm{
                    margin-top: 4%;
                }
                .text-font{
                    font-family: "Archivo Black";
                }
                .button-games{
                    font-family: "Archivo Black";
                    font-size: 1.5em;
                    width: 25%;
                    height: 70px;
                    border-radius: 10px;
                    border: none;
                }
                
                
                `}
            </style>

            <div className="slideshow-container">
                <img src={images[currentIndex]} alt="Slideshow" className="slideshow-image"/>
                <span className="prev" onClick={handlePrev}>&#10094;</span>
                <span className="next" onClick={handleNext}>&#10095;</span>
            </div>

            <div className="container text-center">
                <div className="row">
                    <div className="col-sm">
                        <h2 className="text-font">Get Points now:</h2>
                    </div>
                    <div className="col-sm">
                        <Link className={"nav-link"} to={"/Games"}>
                            <button class="button-games">Games</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="movies-container">
                {movies.map((movie, index) => (
                    <div key={index} className="movie">
                        <img src={movie.poster} alt={movie.title}/>
                        <div className="movie-details">
                            <div className="movie-title">{movie.title}</div>
                            <div className="movie-description">{movie.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;