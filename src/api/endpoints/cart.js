import HttpClient from '@/api/http-client.js'

const client = new HttpClient()

export const getCart = () => {
  return client.get('cart/')
}

export const postAddToCart = (data) => {
  return client.post('cart/add/', data)
}

export const patchUpdateCart = (data) => {
  return client.patch(`cart/update/${data.item_id}`, data)
}

export const deleteCartItem = (data) => {
  return client.delete(`cart/remove/${data.item_id}`)
}

export default {
  getCart,
  postAddToCart,
  patchUpdateCart,
  deleteCartItem
}
