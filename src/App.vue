<script setup>
  import TodoAppHome from './components/TodoApp/TodoAppHome.vue';
  import Header from './components/Ui/Layout/Header.vue';
  import DefaultLayout from './components/Ui/Layout/DefaultLayout.vue';
  import { onMounted,computed } from 'vue';
  import { useStore } from 'vuex'
  import { useToast } from "vue-toastification";

  const store = useStore()
  const toast = useToast()
  const todos = computed(() => store.state.todos.todos)

  const addTodo = (todo) => {
    store.dispatch('todos/addTodo',todo)  
  }

  const toggleCompleteTodo = (todo) => {
    store.dispatch('todos/toggleCompleteTodo',todo);
    toast.success("Статус задачи изменен на 'Выполнено'!", {
      timeout: 1200,
      position: 'top-center'
    });
  }

  const setEditTodo = (todo) => {
    store.commit('todos/SET_EDIT_TODO',todo);
  }

  const deleteTodo = (todoId) => {
    store.dispatch('todos/deleteTodo',todoId);
    toast.warning("Статус задачи изменен на 'Не Выполнено'!", {
      timeout: 1200,
      position: 'top-center'
    });
  }

  const setTodo = (todo) => {
    if(todo.title == '') return toast.error("Текст задачи не может быть пустым", {
      timeout: 1200
    });
    store.commit('todos/TOGGLE_COMPLETE_TODO',todo);
    toast.info("Задача успешно изменена!", {
      timeout: 1200,
      position: 'top-center'
    });
  }

  const refreshTodos = () => {
    store.dispatch('todos/initTodos');

  }

  onMounted(() => {
    store.dispatch('todos/syncAllTodos')  
  })


</script>

<template>
  <Header 
  @refresh-todos="refreshTodos" />
  <DefaultLayout>
    <TodoAppHome 
    :todos="todos"
    :toggle-complete-todo="toggleCompleteTodo"
    :add-todo="addTodo"
    :set-todo="setTodo"
    :delete-todo="deleteTodo"
    :set-edit-todo="setEditTodo"
    />
  </DefaultLayout>
</template>

<style scoped>
</style>
