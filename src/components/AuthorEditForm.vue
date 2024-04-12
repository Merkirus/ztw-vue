<template>
    <div>
      <h1>Author Edit</h1>
      <author-edit-form-view :authorSource="author" @edit:author="editAuthor" />
    </div>
  </template>

<script>
import { useRoute } from 'vue-router'
import AuthorEditFormView from '@/views/AuthorEditFormView.vue'

export default {
  name: 'author-edit-form',
  components: {
    AuthorEditFormView
  },
  setup() {
    const route = useRoute()
    return {
      route
    }
  },
  data() {
    return {
      author: {
        id: '',
        name: '',
        surname: ''
      }
    }
  },
  methods: {
    async editAuthor(author) {
      const data = {
          id: author.id,
          name: author.name,
          surname: author.surname
      }
      const options = {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }
      const url = "/api/authors/"+author.id
      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error("Network edit")
        }
      } catch (error) {
        console.error(error)
      }
    },

    async getAuthor(id) {
      const url = "/api/authors/"+id
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Network edit")
        }
        const data = await response.json()
        this.author = data
      } catch (error) {
        console.error(error)
      }
    }
  },

  mounted() {
    this.getAuthor(this.route.params.id)
  }
}
</script>

<style scoped></style>