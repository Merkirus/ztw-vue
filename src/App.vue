<template>
  <div id="app">
    <h1>XDDD</h1>
  </div>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/books">Books</RouterLink>
    </nav>
  </header>
  <div id="app">
    <h1>XDDD</h1>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background: blue;
  border: 2px solid blue;
}

.small-container {
  max-width: 680px;
}
</style>
