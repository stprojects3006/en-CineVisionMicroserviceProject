import axios from "axios";
//import { API_BASE_URL } from "../App";

export class CityService {
    
    apiUrl = App.API_BASE_URL + "/api/movie/cities/"

    getCitiesByMovieId(movieId) {
        return axios.get(this.apiUrl + "getCitiesByMovieId/" + movieId);
    }

    getall() {
        return axios.get(this.apiUrl + "getall");
    }

    addCity(cityDto) {
        return axios.post(this.apiUrl + "add", cityDto);
    }
}