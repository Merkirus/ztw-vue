<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <label>BookID</label>
        <input
            v-model="rentalSource.bookId"
            type="text"
            :class=" { 'has-error': submitting && invalidIdBook }"
        />
        <label>UserID</label>
        <input
            v-model="rentalSource.userId"
            type="text"
            :class=" { 'has-error': submitting && invalidIdUser }"
        />
        <label>Date</label>
        <input
            v-model="rentalSource.date"
            type="text"
            :class=" { 'has-error': submitting && invalidDate }"
        />
        <label>Returned</label>
        <input
            v-model="rentalSource.returned"
            type="text"
            :class=" { 'has-error': submitting && invalidReturned }"
        />
        <p v-if="error && submitting" class="error-message">
          Proszę wypełnić wskazane pola formularza
        </p>
        <p v-if="success" class="success-message">
          Dane poprawnie zapisano
        </p>
        <button>Edytuj autora</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'rental-edit-form-view',
    props: {
      rentalSource: Object
    },
    setop() {
    },
    data() {
      return {
        submitting: false,
        error: false,
        success: false
      }
    },
    methods: {
      handleSubmit() {
        this.submitting = true
        this.clearStatus()
  
        if (this.invalidIdBook || this.invalidIdUser || this.invalidDate || this.invalidReturned) {
          this.error = true;
          return;
        }
  
        this.$emit("edit:rental", this.rentalSource)
  
        this.error = false
        this.success = true
        this.submitting = false
      },
  
      clearStatus() {
        this.success = false
        this.error = false
      }
    },
    computed: {
      invalidIdBook()  {
        const naturalNumberRegex = /^[1-9]\d*$/
        if (!naturalNumberRegex.test(this.rentalSource.bookId) || isNaN(Number(this.rentalSource.bookId))) {
            return true
        }
        return false
      },

      invalidIdUser()  {
        const naturalNumberRegex = /^[1-9]\d*$/
        if (!naturalNumberRegex.test(this.rentalSource.userId) || isNaN(Number(this.rentalSource.userId))) {
            return true
        }
        return false
      },
  
      invalidDate() {
        const dateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
        if (!dateRegex.test(this.rentalSource.date)) {
          return true
        }
        return false
      },
  
      invalidReturned() {
        if (this.rentalSource.returned === 'true' || this.rentalSource.returned === 'false') {
          return false
        }
          return true
      }
    }
  }
  </script>
  
  <style scoped>
  form {
    margin-bottom: 2rem;
  }
  
  [class*='-message'] {
    font-weight: 500;
  }
  
  .error-message {
    color: red;
  }
  
  .success-message {
    color: green;
  }
  
  .has-error {
    border: 2px solid red;
  }
  </style>