import axios from "axios";
import { API_BASE_URL } from "../App"; 

export class MovieService {
  
    apiUrl = API_BASE_URL + "/api/movie/movies/"

    getAllDisplayingMovies() {
        return axios.get(this.apiUrl + "displayingMovies");
    }

    getAllComingSoonMovies() {
        return axios.get(this.apiUrl + "comingSoonMovies");
    }

    getMovieById(movieId) {
        return axios.get(this.apiUrl + movieId);
    }

    addMovie(movieDto) {
        return axios.post(this.apiUrl + "add", movieDto);
    }
}