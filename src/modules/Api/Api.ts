import axios from 'axios';

export const fetchMovies = async () => {
  const API_URL = 'http://10.0.2.2:5000/movies/movies';
  try {
    const res = await axios.get(API_URL);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovieDetails = async movie_id => {
  const API_URL = `http://10.0.2.2:5000/movies/${movie_id}`;
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
