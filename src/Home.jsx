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
        // Weitere Filme hinzufügen
    ];

  return (
      <>
        <h1>Hallo</h1>
      </>
  )
}

export default Home
