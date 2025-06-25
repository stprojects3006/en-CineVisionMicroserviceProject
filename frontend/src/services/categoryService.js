import axios from "axios"
import { API_BASE_URL } from "../App";

export class CategoryService{
    apiUrl = API_BASE_URL + "/api/movie/categories/"

    getall() {
        return axios.get(this.apiUrl + "getall")
    }
}