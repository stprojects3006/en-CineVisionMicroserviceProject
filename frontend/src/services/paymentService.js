import axios from "axios";
import { API_BASE_URL } from "../App"; 

export class PaymentService {

    apiUrl = API_BASE_URL + "/api/movie/payments/"

    sendTicketDetail(ticketDetail) {
        return axios.post(this.apiUrl + "sendTicketDetail", ticketDetail);
    }
}