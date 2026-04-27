import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const sessionId = ref(null)

  const init = () => {
    const whoami = localStorage.getItem('whoami')

    if (whoami) {
      try {
        user.value = JSON.parse(whoami)
      } catch {
        user.value = whoami
      }
    } else {
      user.value = null
    }

    let storageSessionId = localStorage.getItem('session_id')

    if (!storageSessionId) {
      storageSessionId = crypto.randomUUID()
      localStorage.setItem('session_id', storageSessionId)
    }

    sessionId.value = storageSessionId
  }

  const isLogged = computed(() => !!user.value)

  const login = (userData) => {
    localStorage.setItem('whoami', JSON.stringify(userData))
    user.value = userData
    init()
  }

  const logout = () => {
    localStorage.removeItem('whoami')
    user.value = null
  }

  init()

  return { user, isLogged, sessionId, login, logout, init }
})
