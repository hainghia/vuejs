<template>
  <Navigation/>
  <router-view/>
  <Todos/>
</template>

<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import Todos from "@/components/Todos.vue";
</script>
<style scoped>
.title {
  color: red;
}
</style>
