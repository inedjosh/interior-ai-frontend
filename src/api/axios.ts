import axios from 'axios'

const baseURL = 'http://localhost:4000/v1'

export default axios.create({
    baseURL: baseURL,
    withCredentials: true,
})
