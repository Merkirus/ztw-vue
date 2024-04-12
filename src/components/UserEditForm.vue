<template>
    <div id="app" class="small-container">
      <h1>User Edit</h1>
      <user-edit-form-view :userSource="user" @edit:user="editUser" />
    </div>
  </template>

<script>
import { useRoute } from 'vue-router'
import UserEditFormView from '@/views/UserEditFormView.vue'

export default {
  name: 'user-edit-form',
  components: {
    UserEditFormView
  },
  setup() {
    const route = useRoute()
    return {
      route
    }
  },
  data() {
    return {
      user: {
        id: '',
        name: ''
      }
    }
  },
  methods: {
    async editUser(user) {
      const data = {
          id: user.id,
          name: user.name
      }
      const options = {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }
      const url = "/api/users/"+user.id
      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error("Network edit")
        }
      } catch (error) {
        console.error(error)
      }
    },

    async getUser(id) {
      const url = "/api/users/"+id
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Network edit")
        }
        const data = await response.json()
        this.user = data
      } catch (error) {
        console.error(error)
      }
    }
  },

  mounted() {
    this.getUser(this.route.params.id)
  }
}
</script>

<style scoped></style>