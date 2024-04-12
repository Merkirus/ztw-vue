<template>
    <div>
      <h1>Authors</h1>
      <authors-table-view :authorsSource="authors" @edit:author="editAuthor" @delete:author="deleteAuthor" />
    </div>
  </template>
  
  <script>
  import router from '@/router'
  import AuthorsTableView from '@/views/AuthorsTableView.vue'
  
  export default {
    name: 'authors-table',
    components: {
      AuthorsTableView
    },
    data() {
      return {
        authors: []
      }
    },
    methods: {
      editAuthor(id) {
        router.push({ path: "/authors/edit/"+id })
      },

      async deleteAuthor(id) {
        try {
          const options = {
            method: 'DELETE'
          }
          const url = "/api/authors/"+id
          const response = await fetch(url, options)
          if (!response.ok) {
            throw new Error("Network delete")
          }
        } catch (error) {
          console.error(error)
        }
        await this.getAuthors()
      },
  
      async getAuthors() {
        try {
          const response = await fetch("/api/authors")
          const data = await response.json()
          this.authors = data
        } catch (error) {
          console.error(error)
        }
      }
    },
  
    mounted() {
      this.getAuthors()
    }
  }
  </script>
  
  <style scoped>
  </style>
  