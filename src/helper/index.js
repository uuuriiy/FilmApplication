import axios from "axios";

// base url to make a requests to the movie database
const instance = axios.create({
    baseURL: "http://localhost:8080",
});

export default instance;
