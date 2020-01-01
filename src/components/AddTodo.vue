<template>
  <div>
      <form v-on:submit="onSubmit">
          <input type="text" name="title" v-model="title"/>
          <input type="submit" value="Add Todo">
      </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import uuid from 'uuid';
  export default {
      name:'AddTodo',
      methods: {
        ...mapActions(['addTodo']),
        onSubmit(e){
          e.preventDefault();
          this.addTodo({title:this.title, id:uuid.v4(), completed:false});
          this.title='';
        }
      },
      data(){
          return {
              title:''
          }
      }
  }
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"]{
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
  }
  input[type="submit"]{
    flex: 2;
    background: #41b883;
    color: #fff;
    border:1px solid #41b883;
    cursor: pointer;
  }
</style>