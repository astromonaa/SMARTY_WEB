import axios from 'axios'

const $api = axios.create({
  baseURL: 'http://45.12.75.188:5000',
  proxy: {
    host: 'localhost',
    port: 5173,
    protocol: 'http'
  }
})

export default $api