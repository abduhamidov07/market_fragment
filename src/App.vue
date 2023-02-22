<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbarNav">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">Logo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="d-flex navbar-nav ms-auto">
          <RouterLink class="nav-link" to="/">All</RouterLink>
          <RouterLink class="nav-link" to="/elektronika"
            >Elektronika</RouterLink
          >
          <RouterLink class="nav-link" to="/maishiyTexnika"
            >Maishiy texnika</RouterLink
          >
          <RouterLink class="nav-link" to="/kiyim">Kiyim</RouterLink>
          <RouterLink class="nav-link" to="/poyabzal">Poyabzal</RouterLink>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
