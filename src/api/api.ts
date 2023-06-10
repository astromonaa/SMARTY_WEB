import axios from 'axios'

const $api = axios.create({
  baseURL: '/api',
  proxy: {
    host: '45.12.75.188',
    port: 5000,
    protocol: 'http'
  }
})

export default $api