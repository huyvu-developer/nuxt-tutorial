<template>
  <div class="container mt-4">
    <h2 class="mb-4">Dashboard</h2>

    <!-- Menu con -->
    <nav class="nav nav-tabs mb-3">
      <NuxtLink to="/day6/dashboard/profile" class="nav-link" active-class="active">Profile</NuxtLink>
      <NuxtLink to="/day6/dashboard/settings" class="nav-link" active-class="active">Settings</NuxtLink>
    </nav>

    <!-- Khu vực hiển thị các trang con -->
    <NuxtPage />
  </div>
</template>

<script setup>
</script>

<style scoped>
.nav-link.active {
  background-color: #0d6efd;
  color: white !important;
}
</style>
