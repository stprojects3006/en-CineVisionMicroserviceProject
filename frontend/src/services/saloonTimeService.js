import axios from "axios";
import { API_BASE_URL } from "../App"; 

export class SaloonTimeService {

    apiUrl = API_BASE_URL + "/api/movie/movieSaloonTimes/"

    getMovieSaloonTimeSaloonAndMovieId(saloonId, movieId) {
        return axios.get(this.apiUrl + "getMovieSaloonTimeSaloonAndMovieId/" + saloonId + "/" + movieId);
    }

}