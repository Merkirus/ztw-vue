<template>
  <div>
    <h1>Books</h1>
    <books-table-view :booksSource="books" @edit:book="editBook" @delete:book="deleteBook" />
  </div>
</template>

<script>
import router from '@/router'
import BooksTableView from '@/views/BooksTableView.vue'

export default {
  name: 'books-table',
  components: {
    BooksTableView
  },
  data() {
    return {
      books: []
    }
  },
  methods: {
    editBook(id) {
      router.push({ path: "/books/edit/"+id })
    },

    async deleteBook(id) {
      try {
        const options = {
          method: 'DELETE'
        }
        const url = "/api/books/"+id
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error("Network delete")
        }
      } catch (error) {
        console.error(error)
      }
      this.getBooks()
    },

    async getBooks() {
      try {
        const response = await fetch("/api/books")
        const data = await response.json()
        this.books = data
      } catch (error) {
        console.error(error)
      }
    }
  },

  mounted() {
    this.getBooks()
  }
}
</script>

<style scoped>
</style>
  