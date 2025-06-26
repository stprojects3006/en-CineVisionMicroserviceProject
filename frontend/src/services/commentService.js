import axios from "axios";
import { API_BASE_URL } from "../App";

export class CommentService {

    apiUrl = API_BASE_URL + "/api/movie/comments/"

    getCommentsByMovieId(movieId, pageNo, pageSize=5) {
        return axios.get(this.apiUrl + "getCommentsByMovieId/" + movieId + "/" + pageNo + "/" + pageSize);
    }

    getCountOfComments(movieId) {
        return axios.get(this.apiUrl + "getCountOfComments/" + movieId);
    }

    addComment(commentDto) {
        return axios.post(this.apiUrl + "add" , commentDto);
    }
    
    deleteComment(deleteCommentDto) {
        return axios.post(this.apiUrl + "delete" , deleteCommentDto);
    }
}