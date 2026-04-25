import HttpClient from '@/api/http-client.js'

const client = new HttpClient()

const user = JSON.parse(localStorage.getItem('whoami') || '{}')

const getFavourites = (params) => {
  return client.get('favourites/', {
    ...(params) && { params },
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

const postAddFavourite = (data) => {
  return client.post(`favourites/add/${data.product_id}`)
}

const deleteFavourite = (data) => {
  return client.delete(`favourites/delete/${data.product_id}`)
}

export default {
  getFavourites,
  postAddFavourite,
  deleteFavourite
}
