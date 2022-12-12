<template>
  <p :class="['toto-item', todoProps.completed ? 'is-complete': '']" :id="id">
    <input type="checkbox" name="" :checked="todoProps.completed">
    {{ todoProps.title }}
    <button class="del-btn">Delete</button>
  </p>
</template>

<script>
import {ref} from "@vue/reactivity";

export default {
  name: "TodoItem",
  props: ['todoProps'],
  setup() {
    const id = ref('my-id')
    return {
      id
    }
  }
}
</script>

<style scoped>
.toto-item {
  background: #f4f4f4;
}

.is-complete {
  text-decoration: line-through
}

.del-btn {
  background: #dca2a2;
  color: #fff;
  cursor: pointer;
  border: none;
}
</style>