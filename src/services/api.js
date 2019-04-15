import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnist-backend.herokuapp.com'
})

export default api;