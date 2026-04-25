import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

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

  return { user, isLogged, login, logout }
})
