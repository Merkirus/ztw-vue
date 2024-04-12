<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="author in authorsSource" :key="author.id">
                    <td>{{ author.id }}</td>
                    <td>{{ author.name }}</td>
                    <td>{{ author.surname }}</td>
                    <td>
                        <button @click="handleEdit(author.id)">Edit</button>
                        <button @click="handleDelete(author.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "authors-table-view",
        props: {
            authorsSource: Array
        }, 
        methods: {
            handleDelete(id) {
                this.$emit("delete:author", id)
            },

            handleEdit(id) {
                this.$emit("edit:author", id)
            }
        }
    }
</script>

<style scoped></style>