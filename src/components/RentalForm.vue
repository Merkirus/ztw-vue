<template>
    <div id="app" class="small-container">
      <h1>Add Rental</h1>
      <rental-form-view @add:rental="addRental" />
    </div>
  </template>

<script>
import RentalFormView from '@/views/RentalFormView.vue'

export default {
  name: 'rental-form',
  components: {
    RentalFormView
  },
  methods: {
    async addRental(rental) {
        const data = {
            id: rental.id,
            date: rental.date,
            returned: rental.returned,
            bookId: rental.bookId,
            userId: rental.userId
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const url = "/api/rentals"
        try {
          const response = await fetch(url, options)
          if (!response.ok) {
            throw new Error("Network")
          }
        } catch (error) {
          console.error(error)
        }
    }
  }
}
</script>

<style scoped></style>