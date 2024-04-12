<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <label>Name</label>
        <input
            v-model="userSource.name"
            type="text"
            :class=" { 'has-error': submitting && invalidName }"
        />
        <p v-if="error && submitting" class="error-message">
          Proszę wypełnić wskazane pola formularza
        </p>
        <p v-if="success" class="success-message">
          Dane poprawnie zapisano
        </p>
        <button>Edytuj użytkownika</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'user-edit-form-view',
    props: {
      userSource: Object
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
  
        if (this.invalidName) {
          this.error = true;
          return;
        }
  
        this.$emit("edit:user", this.userSource)
  
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
      invalidName() {
        return this.authorSource.name === ''
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