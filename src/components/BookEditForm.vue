<template>
    <div>
      <h1>Book Edit</h1>
      <book-edit-form-view :bookSource="book" @edit:book="editBook" />
    </div>
  </template>

<script>
import { useRoute } from 'vue-router'
import BookEditFormView from '@/views/BookEditFormView.vue'

export default {
  name: 'book-edit-form',
  components: {
    BookEditFormView
  },
  setup() {
    const route = useRoute()
    return {
      route
    }
  },
  data() {
    return {
      book: {
        id: '',
        title: '',
        authorId: '',
        pages: ''
      }
    }
  },
  methods: {
    async editBook(book) {
      const data = {
          id: book.id,
          title: book.title,
          authorId: book.authorId,
          pages: book.pages
      }
      const options = {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }
      const url = "/api/books/"+book.id
      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error("Network edit")
        }
      } catch (error) {
        console.error(error)
      }
    },

    async getBook(id) {
      const url = "/api/books/"+id
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Network edit")
        }
        const data = await response.json()
        this.book = data
      } catch (error) {
        console.error(error)
      }
    }
  },

  mounted() {
    this.getBook(this.route.params.id)
  }
}
</script>

<style scoped></style>