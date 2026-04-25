import HttpClient from '@/api/http-client.js'

const client = new HttpClient()

export const getEvents = (params) => {
  return client.get('/events/', { params })
}

export default {
  getEvents
}
