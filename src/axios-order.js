import axios from 'axios';

const Instance = axios.create({
    baseURL: 'https://burger-app-reactjs.firebaseio.com/'
});

export default Instance;