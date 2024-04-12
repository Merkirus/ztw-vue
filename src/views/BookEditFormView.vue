<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label>Title</label>
            <input
                v-model="bookSource.title"
                type="text"
                :class=" { 'has-error': submitting && invalidTitle }"
            />
            <label>AutorId</label>
            <input
                v-model="bookSource.authorId"
                type="text"
                :class=" { 'has-error': submitting && invalidId }"
            />
            <label>Pages</label>
            <input
                v-model="bookSource.pages"
                type="text"
                :class=" { 'has-error': submitting && invalidPages }"
            />
            <p v-if="error && submitting" class="error-message">
                Proszę wypełnić wskazane pola formularza
            </p>
            <p v-if="success" class="success-message">
                Dane poprawnie zapisano
            </p>
            <button>Edytuj książkę</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'book-edit-form-view',
        props: {
            bookSource: Object
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

                if (this.invalidId || this.invalidTitle || this.invalidPages) {
                    this.error = true;
                    return;
                }

                this.$emit("edit:book", this.bookSource)

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
                if (!naturalNumberRegex.test(this.bookSource.authorId) && !isNaN(Number(this.bookSource.authorId))) {
                    return true
                }

                return false
            },

            invalidTitle() {
                return this.bookSource.title === ''
            },

            invalidPages() {                
                const naturalNumberRegex = /^[1-9]\d*$/
                if (isNaN(Number(this.bookSource.pages)) || !naturalNumberRegex.test(this.bookSource.pages)) {
                    return true
                }

                return false
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