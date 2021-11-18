import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tasks-gamefication-api.herokuapp.com',
});

export default api;
