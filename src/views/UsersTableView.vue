<template>
    <div>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in usersSource" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>
            <button @click="updateUser(user.id)">Update</button> <!-- Przycisk edycji -->
            <button @click="deleteUser(user.id)">Delete</button> <!-- Przycisk usuwania -->
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'users-table-view',
    props: {
      usersSource: Array,
    },
    methods: {
      updateUser(id) {
          this.$emit("update:user", id)
      },

      deleteUser(id) {
          this.$emit("delete:user", id)
      }
    }
  }
  </script>
  
  
  
  <style scoped></style>