// composables/useIsMobile.js
import { ref, onMounted, onUnmounted } from 'vue'

export const useViewport = (breakpoint = 375) => {
  const isMobile = ref(false)

  const checkMobile = () => {
    if (typeof window !== 'undefined') {
      isMobile.value = window.innerWidth < breakpoint
    }
  }

  onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })

  return {
    isMobile
  }
}
