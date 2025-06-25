import axios from "axios";
import { API_BASE_URL } from "../App"; 


export class UserService {
    apiUrl = API_BASE_URL + "/api/user/users/";

    addCustomer(customer) {
        return axios.post(this.apiUrl + "add", customer);
    }

    login(loginDto) {
        return axios.post("http://localhost:8080/api/user/auth/login", loginDto);
    }
}