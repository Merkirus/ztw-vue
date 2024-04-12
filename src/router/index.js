import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('@/components/BooksTable.vue')
    },
    {
      path: '/books/edit/:id',
      name: 'edit_books',
      component: () => import('@/components/BookEditForm.vue')
    },
    {
      path: '/books/add',
      name: 'add_books',
      component: () => import('@/components/BookForm.vue')
    },
    {
      path: '/authors',
      name: 'authors',
      component: () => import('@/components/AuthorsTable.vue')
    },
    {
      path: '/authors/edit/:id',
      name: 'edit_authors',
      component: () => import('@/components/AuthorEditForm.vue')
    },
    {
      path: '/authors/add',
      name: 'add_authors',
      component: () => import('@/components/AuthorForm.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/components/UsersTable.vue')
    },
    {
      path: '/users/edit/:id',
      name: 'edit_users',
      component: () => import('@/components/UserEditForm.vue')
    },
    {
      path: '/users/add',
      name: 'add_users',
      component: () => import('@/components/UserForm.vue')
    },
    {
      path: '/rentals',
      name: 'rentals',
      component: () => import('@/components/RentalsTable.vue')
    },
    {
      path: '/rentals/edit/:id',
      name: 'edit_rentals',
      component: () => import('@/components/RentalEditForm.vue')
    },
    {
      path: '/rentals/add',
      name: 'add_rentals',
      component: () => import('@/components/RentalForm.vue')
    }
  ]
})

export default router
