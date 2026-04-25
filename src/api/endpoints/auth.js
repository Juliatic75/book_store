import HttpClient from '@/api/http-client.js'

const client = new HttpClient()

export const login = (data) => {
  return client.post('/login/', data)
}

export const register = (data) => {
  return client.post('/register', data)
}

export default {
  login,
  register
}
