<template>
    <div id="app" class="small-container">
      <h1>Rental Edit</h1>
      <rental-edit-form-view :rentalSource="rental" @edit:rental="editRental" />
    </div>
  </template>

<script>
import { useRoute } from 'vue-router'
import RentalEditFormView from '@/views/RentalEditFormView.vue'

export default {
  name: 'rental-edit-form',
  components: {
    RentalEditFormView
  },
  setup() {
    const route = useRoute()
    return {
      route
    }
  },
  data() {
    return {
      rental: {
        id: '',
        date: '',
        userId: '',
        bookId: '',
        returned: ''
      }
    }
  },
  methods: {
    async editRental(rental) {
      const data = {
          id: rental.id,
          date: rental.date,
          userId: rental.userId,
          bookId: rental.bookId,
          returned: rental.returned
      }
      const options = {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }
      const url = "/api/rentals/"+rental.id
      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error("Network edit")
        }
      } catch (error) {
        console.error(error)
      }
    },

    async getRental(id) {
      const url = "/api/rentals/"+id
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Network edit")
        }
        const data = await response.json()
        this.rental = data
      } catch (error) {
        console.error(error)
      }
    }
  },

  mounted() {
    this.getRental(this.route.params.id)
  }
}
</script>

<style scoped></style>