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

export const fetchMovieDetails = async (movie_id: any) => {
  const API_URL = `http://10.0.2.2:5000/movies/${movie_id}`;
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCinema = async () => {
  const API_URL = 'http://10.0.2.2:5000/theaters/all-theaters';
  try {
    const res = await axios.get(API_URL);
    const theaters = res.data.data;

    const uniqueLocations = [
      ...new Set(theaters.map((theater: any) => theater.location)),
    ];

    uniqueLocations.sort();

    return uniqueLocations;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchShowData = async ({movie_id, selecteddate}: any) => {
  const API_URL = `http://10.0.2.2:5000/shows/showsbydate?movieid=${movie_id}&selecteddate=${selecteddate}`;

  try {
    const res = await axios.get(API_URL);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const payment = async (paymentData: any) => {
  const API_URL = 'http://10.0.2.2:5000/payment/savePayment';
  try {
    const res = await axios.post(API_URL, paymentData);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
