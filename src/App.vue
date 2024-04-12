<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/books">Books</RouterLink>
      <RouterLink to="/authors">Authors</RouterLink>
      <RouterLink to="/users">Users</RouterLink>
      <RouterLink to="/rentals">Rentals</RouterLink>
    </nav>
    <nav>
      <RouterLink to="/books/add">Books Add</RouterLink>
      <RouterLink to="/authors/add">Authors Add</RouterLink>
      <RouterLink to="/users/add">Users Add</RouterLink>
      <RouterLink to="/rentals/add">Rentals Add</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  width: 100%;
  height: 20vh;
}
main {
  display: flex;
  margin: auto;
}
</style>
