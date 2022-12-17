<template>
  <AddTodo @add-todo="addTodo"/>
  <TodoItem v-if="isAuthenticated" v-for="todo in todos" :key="todo.id" :todoProps="todo" @item-completed="markCompleted" @item-deleted="deleted"/>


  <p v-else>
    Not Login
  </p>

</template>

<script>

import axios from 'axios'
import TodoItem from "@/components/TodoItem.vue";
import AddTodo from "@/components/AddTodo.vue";
import { mapState } from 'vuex'

export default {
  name: "Todos",
  components: {AddTodo, TodoItem},
  setup() {
    const markCompleted = (id) => {
      // console.log('Parent = ', id)
      todos.value.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
      })
    }

    const deleted = async (id) => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        todos.value = todos.value.filter(
            todo => todo.id !== id
        )
      } catch (error) {
        console.log(error)
      }


    }

    const addTodo = async (newTodo) => {
      try {
        const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, newTodo)
        todos.value.push(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    return {
      markCompleted,
      deleted,
      addTodo,
    }
  },
  computed: mapState({
    todos: state => state.todos,
    isAuthenticated: state => state.auth.isAuthenticated,
  })
}
</script>

<style scoped>

</style>