import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-backend011.herokuapp.com",
})

export default instance;
