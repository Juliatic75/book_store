import HttpClient from '@/api/http-client.js'

const client = new HttpClient()

export const getEvents = (params) => {
  return client.get('/events', { params })
}

export const postEvent = (data) => {
  return client.post('/reviews/create/', data)
}

export default {
  getEvents,
  postEvent
}
