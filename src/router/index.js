import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BookView from '@/views/BookView.vue'
import FavouritesView from '@/views/FavouritesView.vue'
import BookCatalogView from '@/views/BookCatalogView.vue'
import CartView from '@/views/CartView.vue'
import ProfileView from '@/views/ProfileView.vue'
import EventsView from '@/views/EventsView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import ErrorView from '@/views/ErrorView.vue'
import CoffeeView from '@/views/CoffeeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/coffee',
      name: 'coffee',
      component: CoffeeView,
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesView,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: BookCatalogView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/catalog/:id',
      name: 'book-page',
      component: BookView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: ErrorView
    }
  ],
})

export default router
