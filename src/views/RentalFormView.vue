<template>
    <div id="rental-form-view">
      <form @submit.prevent="handleSubmit">
        <label>ID</label>
        <input v-model="rental.id"
               type="text"
               :class="{ 'has-error': submitting && invalidId }"
               @focus="clearStatus"
               @keypress="clearStatus"/>
        <label>BookID</label>
        <input v-model="rental.bookId"
               type="text"
               :class="{ 'has-error': submitting && invalidBookId }"
               @focus="clearStatus"
               @keypress="clearStatus"/>
        <label>UserID</label>
        <input v-model="rental.userId"
               type="text"
               :class="{ 'has-error': submitting && invalidUserId }"
               @focus="clearStatus"
               @keypress="clearStatus"/>
        <label>Date</label>
        <input v-model="rental.date"
               type="text"
               :class="{ 'has-error': submitting && invalidDate }"
               @focus="clearStatus"
               @keypress="clearStatus"/>
        <label>isReturned</label>
        <input v-model="rental.returned"
               type="text"
               :class="{ 'has-error': submitting && invalidIsreturned }"
               @focus="clearStatus"
               @keypress="clearStatus"/>
        <p v-if="error && submitting" class="error-message">
          Proszę wypełnić wskazane pola formularza
        </p>
        <p v-if="success" class="success-message">
          Dane poprawnie zapisano
        </p>
  
        <button>Wypożycz</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'rental-form-view',
    data() {
      return {
        submitting: false,
        error: false,
        success: false,
        rental: {
          id: '',
          bookId: '',
          userId: '',
          date: '',
          returned: '',
        },
      }
    },
  
    methods: {
      handleSubmit() {
        this.submitting = true
        this.clearStatus()
  
        //check form fields
        if (this.invalidId || this.invalidBookId || this.invalidUserId || this.invalidDate || this.invalidIsreturned) {
          this.error = true
          return
        }
  
        this.$emit('add:rental', this.rental)
  
        //clear form fields
        this.rental = {
          id: '',
          bookId: '',
          userId: '',
          date: '',
          returned: '',
        }
        this.error = false
        this.success = true
        this.submitting = false
      },
      clearStatus() {
        this.success = false
        this.error = false
      },
  
    },
    computed: {
      invalidId() {
        return this.rental.id === ''
      },
      invalidBookId() {
        return this.rental.bookId === ''
      },
      invalidUserId() {
        return this.rental.userId === ''
      },
      invalidDate() {
        return this.rental.date === ''
      },
  
      invalidIsreturned() {
        return this.rental.returned === ''
      },
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
    color: #d33c40;
  }
  
  .success-message {
    color: #32a95d;
  }
  </style>