import {getAllTodos} from '../../lib/shared/requests/todo/todoRequsts.js'

if(!localStorage.getItem("todos")) localStorage.setItem("todos",JSON.stringify([]))
const localTodos = JSON.parse(localStorage.getItem("todos"));

// initial state
const state = () => ({
    todos: localTodos,
  })
  
  // getters
  const getters = {}
  
  // actions
  const actions = {
    async syncAllTodos({ dispatch }) {
      if(localTodos.length > 0) return
      try{
        await dispatch('initTodos');
      }catch(err){
        console.log(err);
      }
    },
    async initTodos({ commit }){
      try{
        const todos = await getAllTodos();
        commit("SET_TODOS", [...todos]);
      }catch(err){
        console.log(error);
      }
    },
    addTodo({ commit }, payload) {
      return new Promise((resolve, reject) => {
        const todo = {
          id: Date.now(),
          userId: 1,
          completed: false,
          ...payload,
        };
        commit('ADD_TODO', todo);
        resolve(todo);
      });
    },
    deleteTodo({ commit, state }, id) {
      return new Promise((resolve, reject) => {
        // Perform the deletion logic
        state.todos = state.todos.filter(todo => todo.id !== id);
        const newLocalData = state.todos; // Assuming localTodos is the same as state.todos
        localStorage.setItem('todos', JSON.stringify(newLocalData));
        // Commit the mutation
        commit('SET_TODOS', state.todos);
        resolve(); // Resolve the promise
      });
    },
    toggleCompleteTodo({commit},payload) {
      commit('TOGGLE_COMPLETE_TODO',{...payload, isDisabled: true});
      setTimeout(() => {
        commit('TOGGLE_COMPLETE_TODO',{...payload, isDisabled: false, completed: !payload.completed});
      }, 300);
    }
  }
  
  // mutations
  const mutations = {
    SET_TODOS(state, todos) {
      state.todos = todos;
      localStorage.setItem('todos',JSON.stringify(todos))
    },
    ADD_TODO(state,todo){
      state.todos = [todo,...state.todos]
      localStorage.setItem('todos',JSON.stringify([todo,...state.todos]))
    },
    SET_EDIT_TODO(state,todo){
      state.todos.find(el => el.id ==todo.id).isEditing = !todo.isEditing;
    },
    TOGGLE_COMPLETE_TODO(state,todo){
      var index = state.todos.findIndex(obj => obj.id === todo.id);
      state.todos[index] = todo;
      localStorage.setItem('todos',JSON.stringify(state.todos))
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }