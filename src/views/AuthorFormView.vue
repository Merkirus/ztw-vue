<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label>Id</label>
            <input
                v-model="author.id"
                type="text"
                :class="{ 'has-error': submitting && invalidId }"
                @focus="clearStatus"
                @keypress="clearStatus"
            />
            <label>Name</label>
            <input
                v-model="author.name"
                type="text"
                :class=" { 'has-error': submitting && invalidId }"
                @focus="clearStatus"
                @keypress="clearStatus"
            />
            <label>Surname</label>
            <input
                v-model="author.surname"
                type="text"
                :class=" { 'has-error': submitting && invalidPages }"
                @focus="clearStatus"
                @keypress="clearStatus"
            />
            <p v-if="error && submitting" class="error-message">
                Proszę wypełnić wskazane pola formularza
            </p>
            <p v-if="success" class="success-message">
                Dane poprawnie zapisano
            </p>
            <button>Dodaj autora</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'author-form-view',
        data() {
            return {
                submitting: false,
                error: false,
                success: false,
                author: {
                    id: '',
                    name: '',
                    surname: ''
                }
            }
        },
        methods: {
            handleSubmit() {
                this.submitting = true
                this.clearStatus()

                if (this.invalidId || this.invalidTitle || this.invalidPages) {
                    this.error = true;
                    return;
                }

                this.$emit("add:author", this.author)

                this.author = {
                    id: '',
                    name: '',
                    surname: ''
                }

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
            invalidId()  {
                const naturalNumberRegex = /^[1-9]\d*$/
                if (!naturalNumberRegex.test(this.author.id) || isNaN(Number(this.author.id))) {
                    return true
                }
                return false
            },

            invalidName() {
                return this.author.name === ''
            },

            invalidSurname() {
                return this.author.surname === ''
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