import { useState } from "react";
import "./App.css";

export default function App() {


  const [movies, setMovies] = useState([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const [rating, setRating] = useState(1);
  function addMovie() {
    const newMovie = 
    {
      name: name,
      review: review,
      rating: Number(rating)
    };
    
    setMovies([...movies, newMovie]);
    setName("");
    setReview("");
    setRating(1);
  }



  

  function getStars(num) 
  {
    let stars = "";
    for (let i = 0; i < num; i++) {
      stars = stars + "⭐";
    }
    return stars;
  }

  return (
    <div>

      <h1>Movie Watchlist</h1>
      <div>
        <input 
          type="text"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="movie name" />
        <input 
          type="text"
          value={review} 
          onChange={(e) => setReview(e.target.value)} 
          placeholder="review comment"/>
       
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={addMovie}>  add movie  </button>
      </div>

      <div>
        {movies.map((movie) => (
          <div>
            <h2>{movie.name}</h2>
            <p>{movie.review}</p>
            <p>{getStars(movie.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}