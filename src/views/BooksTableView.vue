<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>AuthorId</th>
                    <th>Pages</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in booksSource" :key="book.id">
                    <td>{{ book.id }}</td>
                    <td>{{ book.title }}</td>
                    <td>{{ book.authorId }}</td>
                    <td>{{ book.pages }}</td>
                    <td>
                        <button @click="handleEdit(book.id)">Edit</button>
                        <button @click="handleDelete(book.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "books-table-view",
        props: {
            booksSource: Array
        }, 
        methods: {
            handleDelete(id) {
                this.$emit("delete:book", id)
            },

            handleEdit(id) {
                this.$emit("edit:book", id)
            }
        }
    }
</script>

<style scoped></style>