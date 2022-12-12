<template>
  <AddTodo @add-todo="addTodo"/>
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
import AddTodo from "@/components/AddTodo.vue";
import {v4 as uuidv4} from 'uuid';

export default {
  name: "Todos",
  components: {AddTodo, TodoItem},
  setup() {
    const todos = ref([
      {
        id: uuidv4(),
        title: 'Job 1',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Job 2',
        completed: false
      },
      {
        id: uuidv4(),
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
    const addTodo = (newTodo) => {
      todos.value.push(newTodo)
      console.log(newTodo.id)
    }
    return {
      todos,
      markCompleted,
      deleted,
      addTodo
    }
  },
}
</script>

<style scoped>

</style>