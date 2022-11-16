import axios from 'axios'
import env from 'react-dotenv'

const baseURL = env.REACT_APP_API_URL

const axiosClient = axios.create({
  baseURL,
})

export default axiosClient
