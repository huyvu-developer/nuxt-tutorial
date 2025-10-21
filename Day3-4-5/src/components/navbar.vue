<template>
  <nav class="navbar">
    <router-link to="/day5/bai3/dashboard">Dashboard</router-link>
    <router-link to="/day5/bai3/profile">Profile</router-link>
    <router-link to="/day5/bai3/settings">Settings</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  background: #333;
  padding: 10px;
  display: flex;
  gap: 15px;
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
