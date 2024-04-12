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
      <tr v-for="(user, index) in paginatedUsers" :key="user.id">
      <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>
          <button @click="updateUser(user.id)">Update</button>
          <button @click="deleteUser(user.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div>
      <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ pageCount }}</span>
      <button @click="nextPage" :disabled="currentPage === pageCount">Next</button>
    </div>
  </div>
</template>
  
  
  <script>
  import VueJsPaginate from 'vuejs-paginate';
  export default {
    components: {
      VueJsPaginate,
    },
    name: 'users-table-view',
    props: {
      usersSource: Array,
    },
    data() {
      return {
        currentPage: 1,
        pageSize: 5, // Liczba elementów na stronie
      };
    },
    computed: {
      paginatedUsers() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.usersSource.slice(startIndex, endIndex);
      },
      pageCount() {
        return Math.ceil(this.usersSource.length / this.pageSize);
      },
    },
    methods: {
      previousPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.pageCount) {
          this.currentPage++;
        }
      },
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