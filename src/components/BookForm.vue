<template>
    <div>
      <h1>Book Add</h1>
      <book-form-view @add:book="addBook" />
    </div>
  </template>

<script>
import BookFormView from '@/views/BookFormView.vue'

export default {
  name: 'book-form',
  components: {
    BookFormView
  },
  methods: {
    async addBook(book) {
        const data = {
            id: book.id,
            title: book.title,
            authorId: book.authorId,
            pages: book.pages
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const url = "/api/books"
        try {
          const response = await fetch(url, options)
          if (!response.ok) {
            throw new Error("Network")
          }
        } catch (error) {
          console.error(error)
        }
    }
  }
}
</script>

<style scoped></style>