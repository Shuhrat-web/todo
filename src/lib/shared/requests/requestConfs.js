import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_BASE_URL


const baseApiReq = axios.create({
  baseURL: baseUrl,
})


export {baseApiReq};