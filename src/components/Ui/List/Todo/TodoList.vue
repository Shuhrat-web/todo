<script setup>
    import Title from '../../Typography/Title.vue';
    import TodoItem from './TodoItem.vue';
    import CustomButton from '../../Buttons/CustomButton.vue';
    import { ref,computed,reactive } from 'vue';
    const props = defineProps({
        list: {
            type: Array,
            default: []
        },
        title: {
            type: String
        },
        type: {
            type: String,
            default: 'warning'
        },
        toggleComplete: {
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
    let itemsPerPage = ref(10);
    let currentPage = ref(1);
    const sortOptions = reactive([
        { label: 'По умолчанию', value: 'default' },
        { label: 'По алфавиту', value: 'alphabetical' },
        // { label: 'Выполненные', value: 'completed' },
    ]);
    const selectedSortOption = ref('default');

    const displayTodos = computed(() => {
        const startIndex = (currentPage.value - 1) * itemsPerPage.value;
        const endIndex = startIndex + itemsPerPage.value;
        let todos = props.list.slice(0, endIndex);
        
        if (selectedSortOption.value === 'alphabetical') {
            todos = todos.sort((a, b) => a.title.localeCompare(b.title));
        } 
        // else if (selectedSortOption.value === 'completed') {
        //     todos = todos.sort((a, b) => a.completed - b.completed);
        // }

        return todos;
    });

    const showButton = computed(() => currentPage.value * itemsPerPage.value < props.list?.length)

    const loadMore = () => {
        currentPage.value = currentPage.value+1
    }


</script>
<template>
    <div v-if="list && list.length > 0">
        <Title size="xl" :type="type">{{title}}</Title>
        <div class="flex justify-end mt-2">
            <select v-model="selectedSortOption" class="p-2 border border-gray-300 rounded-md">
                <option v-for="option in sortOptions" :value="option.value" :key="option.value">
                {{ option.label }}
                </option>
            </select>
        </div>
        <transition-group appear tag="ul" name="todo" class="flex flex-col gap-4 mt-4" v-if="list.length > 0">
            <li v-for="(todo,i) in displayTodos" :key="todo.id" class="py-4 px-3 bg-secondary-100 rounded-md">
                <TodoItem 
                :todo="todo" 
                :index="i+1" 
                :toggle-complete="props.toggleComplete" 
                :set-todo="props.setTodo" 
                :set-edit-todo="props.setEditTodo" 
                :delete-todo="deleteTodo" />
            </li>
        </transition-group>
        <div v-if="showButton" class="flex justify-center my-4">
            <CustomButton @click="loadMore()" flat type="primary">
                Показать больше
            </CustomButton>
        </div>
    </div>
    <Title v-else>Задачь в данный момент нет!</Title>
</template>

<style>
    .todo-enter-active, .todo-move {
        transition: .4s ease all;
    }

    .todo-enter-from,.todo-leave-to {
        opacity: 0;
        transform: scale(0.6);
    }

    .todo-leave-active {
        transition: .4s ease all;
        position: absolute;
    }
</style>