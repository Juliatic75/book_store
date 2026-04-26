import HttpClient from '@/api/http-client.js'

const client = new HttpClient()

export const getCoffee = (params) => {
  return client.get('/coffee', { params })
}

export default {
  getCoffee
}
