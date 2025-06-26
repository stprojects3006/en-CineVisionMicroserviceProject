import axios from "axios";
import { API_BASE_URL } from "../App";
//import { applyMiddleware } from "redux";

export class ActorService {
  
    apiUrl = API_BASE_URL + "/api/movie/actors/"
    
    getActorsByMovieId(movieId) {
        return axios.get(this.apiUrl + "getActorsByMovieId/" + movieId);
    }

    getall() {
        return axios.get(this.apiUrl + "getall");
    }
    
    addActor(actorDto) {
        return axios.post(this.apiUrl + "add", actorDto);
    }
}