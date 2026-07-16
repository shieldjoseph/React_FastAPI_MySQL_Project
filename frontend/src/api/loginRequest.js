import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.133.107:8000', // Replace with your FastAPI backend URL
});

export async function postLogin(name, email, password) {
    const response = await api.post('/login', {
        name,
        email,
        password
    });
    return response.data;
}