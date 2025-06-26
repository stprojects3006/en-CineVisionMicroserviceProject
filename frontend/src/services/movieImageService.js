import axios from "axios";
//import { API_BASE_URL } from "../App"; 
     
export class MovieImageService {

    apiUrl= App.API_BASE_URL + "/api/movie/images/"
    
    addMovieImage(imageDto) {
        return axios.post(this.apiUrl + "add", imageDto);
    }
}