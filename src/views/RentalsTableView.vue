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
          <button @click="updateRental(rental.id)">Update</button> <!-- Przycisk edycji -->
          <button @click="deleteRental(rental.id)">Delete</button> <!-- Przycisk usuwania -->
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


<style scoped></style>