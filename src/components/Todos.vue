<template>
  <div>
      <AddTodo/>
      <br>
      <div v-if="allTodos.length > 0">
         <!-- <div v-bind:key="todo.id" v-for="todo in allTodos" class="todos"> -->
          <!-- <TodoItem  v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" class="todo"/> -->
          <FilterTodos/>
          <div class="legend">
            <span>Dubble click to mark as completed</span>
            <span>
              <span class="incomplete-box" style="background:#41b883"></span> = Incomplete
            </span>
            <span>
              <span class="complete-box"></span> = Complete 
            </span>
          </div>
          <h3>Todos</h3>
          <div class="todos">
             <div v-bind:key="todo.id" v-for="todo in allTodos" class="todo" v-bind:class="{ none:todo.completed }">
               {{todo.title}}
               <i @click="onRemoveClick(todo.id)" class="fas fa-trash"></i>
            </div>
          </div>
         <!-- </div> -->
      </div>
      <div v-else>No todos found!</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

// Components 
import AddTodo from './AddTodo';
import FilterTodos from './FilterTodos';

  export default {
      name:'Todos',
       computed: mapGetters(['allTodos']),
       methods: {
         ...mapActions(['fetchTodos', 'removeTodo']),
         onRemoveClick(id){
           this.removeTodo(id);
         }
       },
       created(){
         this.fetchTodos();
       },
      components: {
          FilterTodos,
          AddTodo
      }
  }
  
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-auto-flow: column; */
    grid-gap: 1rem;
  }
    .todo {
        border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  i {
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
    color: #ffffff;
  }
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
  };
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
  };
  .none {
    background: red !important;
  }
</style>