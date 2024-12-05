import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import { genres } from './constants';

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  overview: string;
  genre_ids: number[];
  poster_path: string;
  release_date: string;
  // Add other properties as needed
}

function App(): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Movie[]>([]);

  const handleSearch = async () => {
    const response = await fetch(
      `/api/proxy/https://api.themoviedb.org/3/search/movie?query=${query}`
    );
    const data = await response.json();
    setResults(data.results);
  };

  const getGenreNames = (genreIds: number[]): string => {
    return genreIds
      .map((id) => genres.find((genre: Genre) => genre.id === id)?.name)
      .filter((name) => name)
      .join(', ');
  };

  return (
    <Router>
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <Welcome />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <div className={styles['results']}>
            {results.map((movie) => (
              <div key={movie.id} className={styles['movie']}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>
                  Release Year: {new Date(movie.release_date).getFullYear()}
                </p>
                <p>Genres: {getGenreNames(movie.genre_ids)}</p>
              </div>
            ))}
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
