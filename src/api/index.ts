import axios, { AxiosResponse } from "axios";

const api = axios.create({
    baseURL: '',
    headers: {}
})

export default api;