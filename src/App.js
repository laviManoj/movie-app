import { useEffect, useState } from "react";

import Axios from "axios";

import "./movie.css";


function App() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/movies")
      .then((res) => {
        console.log("Movies data", res.data);
        setmovies(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const arr = movies.map((movies, index) => {
    return (
      <tr>
        <td>{movies.id}</td>
        <td>{movies.name}</td>
        <td>{movies.rating}</td>
        <td>{movies.released_date}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <h1 className="text-center">Movies List</h1>
      <div className="movie-cards">
        {movies.map((movie) => (
          <div key={movie.name} className="movie-card">
            <h2>Id:{movie.id}</h2>
            <h2>Movie:{movie.name}</h2>
            <h2>Rating: {movie.rating}</h2>
            <h2>Date:{movie.released_date}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
