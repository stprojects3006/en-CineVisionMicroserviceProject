import axios from "axios"
//import { API_BASE_URL } from "../App";

export class DirectorService{
  
    apiUrl = App.API_BASE_URL + "/api/movie/directors/"

    getall() {
        return axios.get(this.apiUrl + "getall")
    }

    add(director) {
        return axios.post(this.apiUrl + "add", director);
    }
}