import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: true // allows HTTP-only cookies to be sent
});

export const signup = async (username, email, password, phone) =>
    {
        return await API.post('/auth/signup', { username, email, password, phone });
    }

export const signin = async (username, password) =>
    {
        return await API.post('/auth/signin', { username, password });
    }
