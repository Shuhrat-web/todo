<script setup>
    import CustomButton from '../../Buttons/CustomButton.vue';
    import CustomSwitch from '../../Form/CustomSwitch.vue';
    import CustomInput from '../../Form/CustomInput.vue';
    import {ref,onMounted} from 'vue';
    const props = defineProps({
        todo: {
            type: Object
        },
        index: {
            type: Number,
            default: 1
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

    const editingValue = ref('');

    const setEditing = () => {
        if(!props.todo.isEditing) return props.setEditTodo(props.todo);
        props.setTodo({...props.todo,title:editingValue.value});
        props.setEditTodo(props.todo);
    }

    onMounted(() => {
        if(props.todo?.title) editingValue.value = props.todo?.title
    })
</script>
<template>
    <div class="py-4 px-3 bg-secondary-100 rounded-md w-full">
        <div>
            {{ index}}. 
            <template v-if="todo.isEditing">
                <CustomInput @keyup.enter="setEditing()" class="w-9/12" v-model="editingValue" />
            </template>
            <template v-else>
                {{ todo.title }}
            </template>
        </div>
        <div class="flex gap-2 justify-end items-center mt-2">
            <CustomSwitch 
            :disabled="todo.isDisabled" 
            @click="!todo.isDisabled && toggleComplete(todo)" 
            :active="todo.completed"  />
            <CustomButton flat type="danger" @click="deleteTodo(todo.id)">
                Удалить
            </CustomButton>
            <CustomButton flat @click="setEditing()">
                {{ !todo.isEditing ? ' Редактировать' : 'Сохранить' }}
            </CustomButton>
        </div>
    </div>
</template>