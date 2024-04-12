import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    //   meta: {
    //     layout: 'MainLayout'
    //   }
    // },
    {
      path: '/books',
      name: 'books',
      component: () => import('@/components/BooksTable.vue'),
      meta: {
        layout: 'AppLayoutTable'
      }
    },
    {
      path: '/books/edit/:id',
      name: 'edit_books',
      component: () => import('@/components/BookEditForm.vue'),
      meta: {
        layout: 'AppLayoutForm'
      }
    },
    {
      path: '/books/add',
      name: 'add_books',
      component: () => import('@/components/BookForm.vue'),
      meta: {
        layout: 'AppLayoutForm'
      }
    },
    {
      path: '/authors',
      name: 'authors',
      component: () => import('@/components/AuthorsTable.vue'),
      meta: {
        layout: 'AppLayoutTable'
      }
    },
    {
      path: '/authors/edit/:id',
      name: 'edit_authors',
      component: () => import('@/components/AuthorEditForm.vue'),
      meta: {
        layout: 'AppLayoutForm'
      }
    },
    {
      path: '/authors/add',
      name: 'add_authors',
      component: () => import('@/components/AuthorForm.vue'),
      meta: {
        layout: 'AppLayoutForm'
      }
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/components/UsersTable.vue'),
      meta: {
        layout: 'AppLayoutTable'
      }
    },
    {
      path: '/users/edit/:id',
      name: 'edit_users',
      component: () => import('@/components/UserEditForm.vue'),
      meta: {
        layout: 'AppLayoutForm'
      }
    },
    {
      path: '/users/add',
      name: 'add_users',
      component: () => import('@/components/UserForm.vue'),
      meta: {
        layout: 'AppLayoutForm'
      }
    },
    {
      path: '/rentals',
      name: 'rentals',
      component: () => import('@/components/RentalsTable.vue'),
      meta: {
        layout: 'AppLayoutTable'
      }
    },
    {
      path: '/rentals/edit/:id',
      name: 'edit_rentals',
      component: () => import('@/components/RentalEditForm.vue'),
      meta: {
        layout: 'AppLayoutForm'
      }
    },
    {
      path: '/rentals/add',
      name: 'add_rentals',
      component: () => import('@/components/RentalForm.vue'),
      meta: {
        layout: 'AppLayoutForm'
      }
    }
  ]
})

export default router
