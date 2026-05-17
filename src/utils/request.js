import axios from 'axios'

// Create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api', // use env variable
  timeout: 10000 // request timeout
})

// Request interceptor
service.interceptors.request.use(
  config => {
    // You can add custom headers here, like an authorization token
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`
    // }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// Response interceptor
service.interceptors.response.use(
  response => {
    // Modify based on your backend response structure
    // E.g., if your backend always returns data in a 'data' wrapper:
    return response.data
  },
  error => {
    console.error('API Error:', error) // for debug
    // You can handle global errors here, like redirecting on 401 Unauthorized
    return Promise.reject(error)
  }
)

export default service
