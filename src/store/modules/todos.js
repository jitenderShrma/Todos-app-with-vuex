/* eslint-disable */
import axios from 'axios';

const state = {
    todos:[]
};

const getters = {
    allTodos: state => state.todos
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    addTodo: (state, todo) => (state.todos.unshift(todo)),
    removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id != id)),
    filteredTodos:(state, todos) => {
        console.log(todos);
        return state.todos = todos;
    }
};

const actions = {
    async fetchTodos({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data[0])
        commit('setTodos', response.data);
    },
    addTodo({commit}, data){
        axios.post('https://jsonplaceholder.typicode.com/todos', data)
        .then(res => commit('addTodo',res.data))
        .catch(error => console.log(error));
    },
    async removeTodo({commit}, id){
        let r = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },
    async filterTodos({commit}, limit){
        const todos = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`);
        commit('filteredTodos',todos.data);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}