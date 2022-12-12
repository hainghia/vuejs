<template>
  <TodoItem v-for="todo in todos" v-bind:key="todo.id" v-bind:todoProps="todo"/>
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
        id: 1,
        title: 'Job 1',
        completed: true
      },
      {
        id: 2,
        title: 'Job 2',
        completed: true
      },
      {
        id: 3,
        title: 'Job 3',
        completed: false
      },
    ])
    return {
      todos
    }
  },
}
</script>

<style scoped>

</style>