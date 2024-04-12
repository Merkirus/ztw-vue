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
          <button @click="handleEdit(author.id)" class="edit-button">Edit</button>
          <button @click="handleDelete(author.id)" class="delete-button">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="pagination">
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

<style scoped>
button {
  margin: 10px;
}
.edit-button {
  border: 2px solid #ff6d00;
  background-color: #ff6d00;
}
.edit-button:hover {
  border: 2px solid #ff4800;

  background-color: #ff4800;
}
.delete-button {
  border: 2px solid #d00000;
  background-color: #d00000;
}
.delete-button:hover {
  border: 2px solid #9d0208;
  background-color: #9d0208;
}
table {
  border-collapse: collapse;
  width: 100%;
  max-width: 800px; /* Możesz dostosować maksymalną szerokość do swoich preferencji */
  margin: 0 auto; /* Wycentrowanie tabeli na stronie */
}

/* Stylowanie nagłówków tabeli */
th {
  background-color: #f2f2f2; /* Kolor tła */
  color: #333; /* Kolor tekstu */
  font-weight: bold; /* Pogrubienie tekstu */
  padding: 12px 15px; /* Wewnętrzne odstępy */
  text-align: left; /* Wyrównanie tekstu do lewej */
}

/* Stylowanie komórek wierszy tabeli */
td {
  border-bottom: 1px solid #ddd; /* Linia oddzielająca komórki */
  color: #666; /* Kolor tekstu */
  padding: 10px 15px; /* Wewnętrzne odstępy */
}
.pagination {
  text-align: center; /* Wyśrodkowanie zawartości diva */
  display: inline-block; /* Dopasowanie szerokości do zawartości */
  width: 100%; /* Ustawienie szerokości na 100% */
}
</style>