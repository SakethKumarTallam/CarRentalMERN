import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:5001/api"  // Ensure this matches your backend port
});

export default instance;
