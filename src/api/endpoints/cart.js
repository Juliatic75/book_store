import HttpClient from '@/api/http-client.js'
import qs from 'qs'

const client = new HttpClient()

const isLogged = !!localStorage.getItem('whoami')
const sessionId = localStorage.getItem('session_id')
const sessionQS = !isLogged ? '?' + qs.stringify({ session_id: sessionId }) : ''

export const getCart = (params) => {
  return client.get(`cart/${sessionQS}`, params)
}

export const postAddToCart = (data) => {
  return client.post(`cart/add/${sessionQS}`, data)
}

export const patchUpdateCart = (data) => {
  return client.patch(`cart/update/${data.item_id}${sessionQS}`, data)
}

export const deleteCartItem = (data) => {
  return client.delete(`cart/remove/${data.item_id}${sessionQS}`)
}

export const postMergeCart = (data) => {
  return client.post('cart/merge/', data)
}

export default {
  getCart,
  postAddToCart,
  patchUpdateCart,
  deleteCartItem,
  postMergeCart
}
