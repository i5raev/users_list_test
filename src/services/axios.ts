import axios from "axios";

export const url = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});


