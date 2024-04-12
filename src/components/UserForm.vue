<template>
  <div id="app" class="small-container">
    <h1>Add User</h1>
    <user-form-view @add:user="addUser" />
  </div>
</template>

<script>
import UserFormView from '@/views/UserFormView.vue'

export default {
name: 'user-form',
components: {
  UserFormView
},
methods: {
  async addUser(user) {
      const data = {
          id: user.id,
          name: user.name
        }
      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }
      const url = "/api/users"
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