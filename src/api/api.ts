import axios from 'axios'

const $api = axios.create({
  baseURL: '/',
  proxy: {
    host: '45.12.75.188',
    port: 5000,
    protocol: 'http'
  }
})

$api.interceptors.request.use(request => {
  console.log(request?.url);
  
  request.url = request?.url?.replace(/^\/api/, 'http://45.12.75.188:5000');
  return request;
});


export default $api