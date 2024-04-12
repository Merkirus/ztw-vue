<template>
  <div id="user-form-view">
    <form @submit.prevent="handleSubmit">
      <label>ID</label>
      <input v-model="user.id"
             type="text"
             :class="{ 'has-error': submitting && invalidId }"
             @focus="clearStatus"
             @keypress="clearStatus"/>
      <label>Imię</label>
      <input v-model="user.name"
             type="text"
             :class="{ 'has-error': submitting && invalidName }"
             @focus="clearStatus"
             @keypress="clearStatus"/>
      <p v-if="error && submitting" class="error-message">
        Proszę wypełnić wskazane pola formularza
      </p>
      <p v-if="success" class="success-message">
        Dane poprawnie zapisano
      </p>

      <button>Dodaj użytkownika</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'user-form-view',
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      user: {
        id: '',
        name: '',
      },
    }
  },

  methods: {
    handleSubmit() {
      this.submitting = true
      this.clearStatus()

      //check form fields
      if (this.invalidId || this.invalidName) {
        this.error = true
        return
      }

      this.$emit('add:user', this.user)

      //clear form fields
      this.user = {
        id: '',
        name: '',
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
      return this.user.id === ''
    },
    invalidName() {
      return this.user.name === ''
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