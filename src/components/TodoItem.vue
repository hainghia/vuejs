<template>
  <p :class="['toto-item', todoProps.completed ? 'is-complete': '']" :id="todoProps.id">
    <input type="checkbox" name="" :checked="todoProps.completed" @change="markItemCompleted">
    {{ todoProps.title }}
    <button class="del-btn" @click="deleteItem">Delete</button>
  </p>
</template>

<script>
import {ref} from "@vue/reactivity";

export default {
  name: "TodoItem",
  props: ['todoProps'],
  setup(props, context) {
    const id = ref('my-id')
    const markItemCompleted = () => {
      // console.log(props.todoProps.id)
      context.emit('item-completed', props.todoProps.id)
    }
    const deleteItem = () => {
      context.emit('item-deleted', props.todoProps.id)
    }
    return {
      id,
      markItemCompleted,
      deleteItem
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