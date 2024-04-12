<template>
  <div class="links">
    <nav class="rounded-nav">
      <RouterLink to="/books" class="rounded-link">Books</RouterLink>
      <RouterLink to="/authors" class="rounded-link">Authors</RouterLink>
      <RouterLink to="/users" class="rounded-link">Users</RouterLink>
      <RouterLink to="/rentals" class="rounded-link">Rentals</RouterLink>
    </nav>
    <nav class="rounded-nav">
      <RouterLink to="/books/add" class="rounded-link-add">Books Add</RouterLink>
      <RouterLink to="/authors/add" class="rounded-link-add">Authors Add</RouterLink>
      <RouterLink to="/users/add" class="rounded-link-add">Users Add</RouterLink>
      <RouterLink to="/rentals/add" class="rounded-link-add">Rentals Add</RouterLink>
    </nav>
</div>
</template>

<script>
export default {
  name: "AppLayoutLinks"
}
</script>

<style scoped>
.links {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  width: 100%;
  height: 20vh;
}
.rounded-nav {
  display: flex;
  justify-content: space-around;
}

.rounded-link {
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid #0366ee;
  background-color: #0366ee;
  border-radius: 5px; /* Ustawienie okrągłego obramowania */
  text-decoration: none;
  color: #f0f0f0;
  transition: background-color 0.3s ease;
  margin: 10px;
  font-size: 16px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont,sans-serif;
}

.rounded-link:hover {
  border: 2px solid #023e8a;

  background-color: #023e8a;
}

.rounded-link-add {
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid #009435;
  background-color: #009435;
  border-radius: 5px; /* Ustawienie okrągłego obramowania */
  text-decoration: none;
  color: #f0f0f0;
  transition: background-color 0.3s ease;
  margin: 10px;
  font-size: 16px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont,sans-serif;

}
.rounded-link-add:hover {
  border: 2px solid #004b23;

  background-color: #004b23;
}
</style>