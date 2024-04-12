<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label>Id</label>
            <input
                v-model="book.id"
                type="text"
                :class="{ 'has-error': submitting && invalidId }"
                @focus="clearStatus"
                @keypress="clearStatus"
            />
            <label>Title</label>
            <input
                v-model="book.title"
                type="text"
                :class=" { 'has-error': submitting && invalidTitle }"
                @focus="clearStatus"
                @keypress="clearStatus"
            />
            <label>AutorId</label>
            <input
                v-model="book.authorId"
                type="text"
                :class=" { 'has-error': submitting && invalidAuthor }"
                @focus="clearStatus"
                @keypress="clearStatus"
            />
            <label>Pages</label>
            <input
                v-model="book.pages"
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
            <button>Dodaj książkę</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'book-form-view',
        data() {
            return {
                submitting: false,
                error: false,
                success: false,
                book: {
                    id: '',
                    title: '',
                    authorId: '',
                    pages: ''
                }
            }
        },
        methods: {
            handleSubmit() {
                this.submitting = true
                this.clearStatus()

                if (this.invalidId || this.invalidTitle || this.invalidPages || this.invalidAuthor) {
                    this.error = true;
                    return;
                }

                this.$emit("add:book", this.book)

                this.book = {
                    id: '',
                    title: '',
                    authorId: '',
                    pages: ''
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

                if (isNaN(Number(this.book.id)) || !naturalNumberRegex.test(this.book.id)) {
                    return true
                }

                return false
            },

            invalidTitle() {
                return this.book.title === ''
            },

            invalidAuthor() {
                const naturalNumberRegex = /^[1-9]\d*$/

                if (!naturalNumberRegex.test(this.book.authorId) && !isNaN(Number(this.book.authorId))) {
                    return true
                }

                return false
            },

            invalidPages() {
                const naturalNumberRegex = /^[1-9]\d*$/

                if (isNaN(Number(this.book.pages)) || !naturalNumberRegex.test(this.book.pages)) {
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