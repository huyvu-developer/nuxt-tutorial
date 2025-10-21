<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
    <div class="container">
      <NuxtLink class="navbar-brand fw-bold" to="/">MyWebsite</NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link" exact>Trang chủ</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" class="nav-link">Giới thiệu</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/contact" class="nav-link">Liên hệ</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
