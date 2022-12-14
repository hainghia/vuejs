<template>
  <form @submit="addItem">
    <input type="text" placeholder="new ..." v-model="title">
    <input type="submit" value="Add" class="add-btn">
  </form>
</template>

<script>
import {ref} from "@vue/reactivity";

export default {
  name: "AddTodo",
  setup(props, context) {
    const title = ref('')
    const addItem = (event) => {
      event.preventDefault()
      const newItem = {
        title: title.value,
        completed: false
      }
      title.value = ''
      context.emit('add-todo', newItem)
    }
    return {
      title,
      addItem
    }
  }
}
</script>

<style scoped>

form {
  display: flex;
}

input[type = 'text'] {
  flex: 10;
}
</style>