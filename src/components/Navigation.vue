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
        <li>Total todos: {{ totalTodos }}</li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import store from "@/store";

export default {
  name: "Navigation",
  computed: {
    totalTodos() {
      return store.state.todos.length
    },
  }
}
</script>

<style scoped>
.header {
  background: #333;
  color: #ffff;
}
</style>
