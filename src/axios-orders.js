import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-project.firebaseio.com/'
});

export default instance;
