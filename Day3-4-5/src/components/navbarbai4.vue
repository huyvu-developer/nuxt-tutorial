<template>
  <nav class="navbar">
    <router-link to="/day5/bai4/all-tasks">All</router-link>
    <router-link to="/day5/bai4/completed-tasks">Completed</router-link>
    <router-link to="/day5/bai4/pending-tasks">Pending</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 20px;
  background-color: #333;
  padding: 10px;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
