<template>
  <div>
    <h1>Users</h1>
    <users-table-view :usersSource="rentals" @update:user="editUser" @delete:user="deleteUser" />
  </div>
</template>

<script>
import router from '@/router'
import UsersTableView from '@/views/UsersTableView.vue'

export default {
  name: 'users-table',
  components: {
    UsersTableView
  },
  data() {
    return {
      rentals: []
    }
  },
  methods: {
    editUser(id) {
      router.push({ path: "/users/edit/"+id })
    },

    deleteUser(userId) {
      fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete rental');
          }
          // Jeśli usunięcie użytkownika powiedzie się, możesz zaktualizować dane na stronie
          this.getUsers(); // Odśwież listę użytkowników
        })
        .catch(error => {
          console.error('Error deleting rental:', error);
        });
    },

    async getUsers() {
      try {
        const response = await fetch('/api/users')
        const data = await response.json()
        this.rentals = data
      } catch (error) {
        console.error(error)
      }
    }
  },

  mounted() {
    this.getUsers()
  }
}
</script>

<style scoped>
</style>
