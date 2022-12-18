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
        <li>{{hello}}</li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import store from "@/store";

export default {
  name: "Navigation",
  computed: {
    hello: {
      get () : string {
        return store.state.helloMessage
      }
    }
  }
}
</script>

<style scoped>
.header {
  background: #333;
  color: #ffff;
}
</style>
