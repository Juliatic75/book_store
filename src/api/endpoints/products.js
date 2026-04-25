import HttpClient from '@/api/http-client.js'

const client = new HttpClient()

export const getProducts = (params) => {
  return client.get('/products', { params })
}

export const getProduct = (id) => {
  return client.get(`/products/${id}`)
}

export default {
  getProducts,
  getProduct
}
