import axios from "axios";
const url = process.env.NEXT_PUBLIC_API_BASE_URL
console.log("url",url) 
const axiosClient = axios.create({
  baseURL:process.env.NEXT_PUBLIC_API_BASE_URL,
  headers:{
    "Content-Type":'application/json'
  },
  timeout:10000,
})

axiosClient.interceptors.response.use( r => r,err => {
  return Promise.reject(err)
})
export default axiosClient