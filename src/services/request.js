import axios from "axios"

export default async function apiRequest(method, path = "", payload = {}) {
    // const serviceToken = localStorage.getItem('serviceToken');
    const client = axios.create({
        baseURL: process.env.API_URL,
        // headers: { Authorization: `Bearer ${serviceToken}` }
    })

    const options = {
        method,
        withCredentials: true,
        url: path,
        data: payload,
        json: true,
    }
    return client(options)
}
