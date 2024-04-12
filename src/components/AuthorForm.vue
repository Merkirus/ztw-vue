<template>
    <div >
      <h1>Author Add</h1>
      <author-form-view @add:author="addAuthor" />
    </div>
  </template>

<script>
import AuthorFormView from '@/views/AuthorFormView.vue'

export default {
  name: 'author-form',
  components: {
    AuthorFormView
  },
  methods: {
    async addAuthor(author) {
        const data = {
            id: author.id,
            name: author.name,
            surname: author.surname
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const url = "/api/authors"
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