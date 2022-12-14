<template>
  <header class="header">
    <h1>Header Navigation</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
  background: #333;
  color: #ffff;
}
</style>
