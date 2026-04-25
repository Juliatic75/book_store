import HttpClient from '@/api/http-client.js'

const client = new HttpClient()

const user = JSON.parse(localStorage.getItem('whoami') || '{}')

export const getProducts = (params) => {
  return client.get('/products', {
    params,
    ...(user && user.token) && {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  })
}

export const getProduct = (id) => {
  return client.get(`/products/${id}`)
}

export default {
  getProducts,
  getProduct
}
