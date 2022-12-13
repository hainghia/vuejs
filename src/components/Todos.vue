<template>
  <AddTodo @add-todo="addTodo"/>
  <TodoItem v-for="todo in todos" :key="todo.id" :todoProps="todo" @item-completed="markCompleted" @item-deleted="deleted"/>
</template>

<script>

import axios from 'axios'
import {ref} from "@vue/reactivity";
import TodoItem from "@/components/TodoItem.vue";
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "Todos",
  components: {AddTodo, TodoItem},
  setup() {
    const todos = ref([])
    const getAllTodos = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        todos.value = res.data
      } catch (error) {
        console.log(error)
      }
    }
    getAllTodos()
    const markCompleted = (id) => {
      // console.log('Parent = ', id)
      todos.value.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
      })
    }

    /**
     *
     * @param id
     */
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

    /**
     *
     * @param newTodo
     */
    const addTodo = async (newTodo) => {
      try {
        const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, newTodo)
        todos.value.push(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    return {
      todos,
      markCompleted,
      deleted,
      addTodo,
    }
  },
}
</script>

<style scoped>

</style>