import axios from 'axios'

export default axios.create({
    baseURL: "https://sess-website-backend.vercel.app/api"
})