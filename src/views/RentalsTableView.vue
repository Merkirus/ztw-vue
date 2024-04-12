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
        <tr v-for="rental in rentalsSource" :key="rental.id">
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
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'rentals-table-view',
    props: {
      rentalsSource: Array,
    },
    methods: {
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