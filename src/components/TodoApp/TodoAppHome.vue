<script setup>
import TodoList from '../Ui/List/Todo/TodoList.vue';
import Title from '../Ui/Typography/Title.vue';
import TodoForm from '../Ui/Form/Todo/TodoForm.vue';
import { computed } from 'vue';

const props = defineProps({
    todos: {
        type: Array,
        default: [],
    },
    addTodo: {
        type: Function,
        default: () => {}
    },
    toggleCompleteTodo: {
        type: Function,
        default: () => {}
    },
    deleteTodo: {
        type: Function,
        default: () => {}
    },
    setEditTodo: {
        type: Function,
        default: () => {}
    },
    setTodo: {
        type: Function,
        default: () => {}
    }

})

const uncompleted = computed(() => props.todos?.filter(el => el.completed == false))
const completed = computed(() => props.todos?.filter(el => el.completed == true))

</script>

<template>
    <div>
        <div class="mb-4">
            <TodoForm :add-todo="addTodo" />
        </div>
        <Title size="xl" type="dark">Список Todo:</Title>
        <div class="grid md:grid-cols-2 mt-4 gap-2">
            <div>
                <TodoList 
                title="Не выполненные:" 
                :delete-todo="props.deleteTodo" 
                :toggle-complete="props.toggleCompleteTodo" 
                :set-todo="props.setTodo"
                :set-edit-todo="props.setEditTodo"
                :list="uncompleted" />   
            </div>
            <div>
                <TodoList 
                title="Выполненные:" 
                :delete-todo="props.deleteTodo" 
                :set-todo="props.setTodo"
                :toggle-complete="props.toggleCompleteTodo" 
                :set-edit-todo="props.setEditTodo"
                type="success" 
                :list="completed" />
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
