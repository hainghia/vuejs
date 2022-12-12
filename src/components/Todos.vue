<template>
  <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todoProps="todo"
      @item-completed="markCompleted"
      @item-deleted="deleted"
  />
</template>

<script>

import {ref} from "@vue/reactivity";
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "Todos",
  components: {TodoItem},
  setup() {
    const todos = ref([
      {
        id: 11,
        title: 'Job 1',
        completed: false
      },
      {
        id: 12,
        title: 'Job 2',
        completed: false
      },
      {
        id: 13,
        title: 'Job 3',
        completed: false
      },
    ])
    const markCompleted = (id) => {
      // console.log('Parent = ', id)
      todos.value.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
      })
    }
    const deleted = (id) => {
      todos.value = todos.value.filter(
          todo => {
            return todo.id !== id
          }
      )
    }
    return {
      todos,
      markCompleted,
      deleted
    }
  },
}
</script>

<style scoped>

</style>