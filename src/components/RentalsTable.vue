<template>
    <div>
      <h1>Rentals</h1>
      <rentals-table-view :rentalsSource="rentals" @update:rental="editRental" @delete:rental="deleteRental" />
    </div>
  </template>
  
  <script>
  import router from '@/router'
  import RentalsTableView from '@/views/RentalsTableView.vue'
  
  export default {
    name: 'rentals-table',
    components: {
      RentalsTableView
    },
    data() {
      return {
        rentals: []
      }
    },
    methods: {
      editRental(id) {
        router.push({ path: "/rentals/edit/"+id })
      },

      deleteRental(rentalId) {
        fetch(`/api/rentals/${rentalId}`, {
          method: 'DELETE',
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to delete rental');
            }
            // Jeśli usunięcie użytkownika powiedzie się, możesz zaktualizować dane na stronie
            this.getRentals(); // Odśwież listę użytkowników
          })
          .catch(error => {
            console.error('Error deleting rental:', error);
          });
      },

      async getRentals() {
        try {
          const response = await fetch('/api/rentals')
          const data = await response.json()
          this.rentals = data
        } catch (error) {
          console.error(error)
        }
      }
    },
  
    mounted() {
      this.getRentals()
    }
  }
  </script>
  
  <style scoped>
  </style>
  