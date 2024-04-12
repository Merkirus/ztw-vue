<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(author, index) in paginatedAuthors" :key="author.id">
        <td>{{ author.id }}</td>
        <td>{{ author.name }}</td>
        <td>{{ author.surname }}</td>
        <td>
          <button @click="handleEdit(author.id)">Edit</button>
          <button @click="handleDelete(author.id)">Delete</button>
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
  name: "authors-table-view",
  props: {
    authorsSource: Array
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 5, // Liczba elementów na stronie
    };
  },
  computed: {
    paginatedAuthors() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.authorsSource.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.authorsSource.length / this.pageSize);
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
    handleDelete(id) {
      this.$emit("delete:author", id)
    },

    handleEdit(id) {
      this.$emit("edit:author", id)
    }
  }
}
</script>

<style scoped></style>