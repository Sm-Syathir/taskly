import axios from "axios";


const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4002",
});


export default http;