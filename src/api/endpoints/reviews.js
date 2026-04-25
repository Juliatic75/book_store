import HttpClient from '@/api/http-client.js'

const client = new HttpClient()

export const getReviews = (params) => {
  return client.get('/reviews/', { params })
}

export const postReview = (data) => {
  return client.post('/reviews/create/', data)
}

export default {
  getReviews,
  postReview
}
