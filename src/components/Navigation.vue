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
        <li v-if="auth.isAuthenticated">Total todos: {{ todos.length }}</li>
        <li v-if="auth.isAuthenticated">
          <button type="submit">Logout</button>
        </li>
        
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { mapState } from 'vuex'

export default {
  name: "Navigation",
  computed: mapState(['todos', 'auth'])
}
</script>

<style scoped>
.header {
  background: #333;
  color: #ffff;
}
</style>
