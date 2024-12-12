import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.2.186.101:3333",
    timeout: 700,
});