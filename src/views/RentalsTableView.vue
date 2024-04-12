<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>BookID</th>
        <th>UserID</th>
        <th>Date</th>
        <th>isReturned</th>
        <th>Actions</th> <!-- Dodaliśmy nagłówek dla przycisków akcji -->
      </tr>
      </thead>
      <tbody>
      <tr v-for="(rental, index) in paginatedRentals" :key="rental.id">
        <td>{{ rental.id }}</td>
        <td>{{ rental.bookId }}</td>
        <td>{{ rental.userId }}</td>
        <td>{{ rental.date }}</td>
        <td>{{ rental.returned }}</td>
        <td>
          <button @click="updateRental(rental.id)" class="edit-button">Edit</button> <!-- Przycisk edycji -->
          <button @click="deleteRental(rental.id)" class="delete-button">Delete</button> <!-- Przycisk usuwania -->
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
  name: 'rentals-table-view',
  props: {
    rentalsSource: Array,
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 5, // Liczba elementów na stronie
    };
  },
  computed: {
    paginatedRentals() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.rentalsSource.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.rentalsSource.length / this.pageSize);
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
    deleteRental(rentalID) {
      // Wywołaj metodę z rodzica, aby usunąć użytkownika
      this.$emit('delete:rental', rentalID);
    },
    updateRental(rentalID) {
      // Wywołaj metodę z rodzica, aby rozpocząć edycję użytkownika
      this.$emit('update:rental', rentalID);
    },

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