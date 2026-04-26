import HttpClient from '@/api/http-client.js'

const client = new HttpClient()

const user = JSON.parse(localStorage.getItem('whoami') || '{}')

export const register = (data) => {
  return client.post('/register/', data)
}

export const login = (data) => {
  return client.post('/login/', data)
}

export const whoami = () => {
  return client.get('/whoami', {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const patchUsersMe = (data) => {
  return client.patch('/users/me/', data)
}

export default {
  login,
  whoami,
  patchUsersMe,
  register
}
