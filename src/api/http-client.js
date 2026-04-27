import axios from 'axios'
import qs from 'qs'

let whoami = JSON.parse(localStorage.getItem('whoami') || '{}')

const originalSetItem = localStorage.setItem

localStorage.setItem = function (key, value) {
  originalSetItem.apply(this, [key, value])

  const event = new Event('itemInserted')
  event.key = key
  event.newValue = value
  window.dispatchEvent(event)
}

window.addEventListener('itemInserted', (e) => {
  if (e.key === 'whoami' && localStorage.getItem('whoami')) {
    whoami = JSON.parse(localStorage.getItem('whoami') || '{}')
  }
})

class HttpClient {
  constructor (baseURL = '/api', defaultHeaders = {}) {
    this.instance = axios.create({
      baseURL,
      headers: defaultHeaders,
      timeout: 10000,
      paramsSerializer: {
        serialize: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
      }
    })

    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('HTTP Error:', error.response?.status, error.message)
        return Promise.reject(error)
      }
    )
  }

  // GET-запрос
  async get (url, config = {}) {
    try {
      const response = await this.instance.get(url, {
        ...config,
        headers: {
          ...(whoami.token) && { Authorization: `Token ${whoami.token}` }
        }
      })
      return response.data
    } catch (error) {
      throw this._normalizeError(error)
    }
  }

  // POST-запрос
  async post (url, data = {}, config = {
    headers: {
      ...(whoami.token) && { Authorization: `Token ${whoami.token}` }
    }
  }) {
    try {
      const response = await this.instance.post(url, data, config)
      return response.data
    } catch (error) {
      throw this._normalizeError(error)
    }
  }

  // PUT-запрос
  async put (url, data = {}, config = {
    headers: {
      ...(whoami.token) && { Authorization: `Token ${whoami.token}` }
    }
  }) {
    try {
      const response = await this.instance.put(url, data, config)
      return response.data
    } catch (error) {
      throw this._normalizeError(error)
    }
  }

  async patch (url, data = {}, config = {
    headers: {
      ...(whoami.token) && { Authorization: `Token ${whoami.token}` }
    }
  }) {
    try {
      const response = await this.instance.patch(url, data, {
        ...config,
        headers: {
          ...(whoami.token) && { Authorization: `Token ${whoami.token}` }
        }
      })
      return response.data
    } catch (error) {
      throw this._normalizeError(error)
    }
  }

  // DELETE-запрос
  async delete (url, config = {
    headers: {
      ...(whoami.token) && { Authorization: `Token ${whoami.token}` }
    }
  }) {
    try {
      const response = await this.instance.delete(url, {
        ...config,
        headers: {
          ...(whoami.token) && { Authorization: `Token ${whoami.token}` }
        }
      })
      return response.data
    } catch (error) {
      throw this._normalizeError(error)
    }
  }

  // Приведение ошибки к удобному формату (опционально)
  _normalizeError (error) {
    if (error.response) {
      // Сервер ответил с кодом 4xx/5xx
      return {
        status: error.response.status,
        message: error.response.data?.message || error.message,
        data: error.response.data,
      }
    } else if (error.request) {
      // Запрос был сделан, но нет ответа
      return {
        status: null,
        message: 'No response from server',
        request: error.request,
      }
    } else {
      // Ошибка на этапе настройки запроса
      return {
        status: null,
        message: error.message,
      }
    }
  }
}
export default HttpClient
