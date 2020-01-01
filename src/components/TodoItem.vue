<template>
  <div class="todo-item todo" v-bind:class="{'is-completed': todo.isCompleted}">
      <!-- <input type="checkbox" v-on:change="onChange" /> -->
      {{todo.title}}
      <!-- <a href="#" @click="$emit('del-todo',todo)">Delete</a> -->
  </div>
</template>

<script>
  export default {
      name:'TodoItem',
      props:['todo'],
      methods: {
          onChange(){
            this.todo.isCompleted = !this.todo.isCompleted;
          },
          
      }
  }
</script>

<style scoped>
  /* .todo-item {
      background: '#f4f4f4';
      border-bottom: 1px #ccc dotted;
      padding: 10px;
  }
  .is-completed {
      text-decoration: line-through;
  } */
  .todo {
        border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
</style>