import axios from 'axios';

const KEY = '0d230252106f56106b4162aa542b588d';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
  try {
    const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=en-US&page=1`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMoviesByName(searchQuery) {
  try {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchQuery}&include_adult=false&language=en-US&page=1`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMoviesDetails(id) {
  try {
    const url = `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
