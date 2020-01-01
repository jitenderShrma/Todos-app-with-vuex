<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <Todos v-bind:todos="allTodos" v-on:del-todo="onDeleteTodo" v-on:add-todo-to-app="addTodo"/> -->
    <Todos/>
  </div>
</template>

<script>
// import axios from 'axios';
import HelloWorld from './components/HelloWorld.vue';
import Todos from './components/Todos.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Todos
  },
  methods: {
    onDeleteTodo(id){
      // eslint-disable-next-line no-console
      // console.log(id, this.todos)
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(todo){
      this.todos.unshift(todo);
      // eslint-disable-next-line no-console
      console.log(this.todos);
    }
  },
  created(){
    // axios.get('https://jsonplaceholder.typicode.com/todos?limits=10')
    // .then(res => this.todos = res.data)
    // .catch(error =>{
    //   // eslint-disable-next-line no-console
    //    console.log(error);
    // });
    //     // eslint-disable-next-line no-console
    // console.log('allTodos', this.allTodos);
  },
  data(){
    return {
      todos:[]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
