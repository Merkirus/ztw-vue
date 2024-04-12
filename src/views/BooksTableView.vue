<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>AuthorId</th>
        <th>Pages</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(book, index) in paginatedBooks" :key="book.id">
        <td>{{ book.id }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.authorId }}</td>
        <td>{{ book.pages }}</td>
        <td>
          <button @click="handleEdit(book.id)">Edit</button>
          <button @click="handleDelete(book.id)">Delete</button>
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
  name: "books-table-view",
  props: {
    booksSource: Array
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 5, // Liczba elementów na stronie
    };
  },
  computed: {
    paginatedBooks() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.booksSource.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.booksSource.length / this.pageSize);
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
      this.$emit("delete:book", id)
    },

    handleEdit(id) {
      this.$emit("edit:book", id)
    }
  }
}
</script>

<style scoped></style>