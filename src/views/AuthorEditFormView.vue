<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Name</label>
      <input
          v-model="authorSource.name"
          type="text"
          :class=" { 'has-error': submitting && invalidName }"
      />
      <label>Surname</label>
      <input
          v-model="authorSource.surname"
          type="text"
          :class=" { 'has-error': submitting && invalidSurname }"
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
  name: 'author-edit-form-view',
  props: {
    authorSource: Object
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

      if (this.invalidName || this.invalidSurname) {
        this.error = true;
        return;
      }

      this.$emit("edit:author", this.authorSource)

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
    },

    invalidSurname() {
      return this.authorSource.surname === ''

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