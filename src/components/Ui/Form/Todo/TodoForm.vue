<script setup>
    import { ref } from 'vue';
    import CustomInput from '../CustomInput.vue';
    import CustomButton from '../../Buttons/CustomButton.vue';
    import { useToast } from "vue-toastification";

    const props = defineProps({
        addTodo:{
            type: Function,
            default: async () => { console.log('add addTodo function!') }
        }
    })
    const toast = useToast()
    const todoTitle = ref("")
    const submitAdd = async () => {
        if(todoTitle.value == '') return toast.error('Поле задачи должно быть заполнено!',{timeout: 2000});
        try{
            await props.addTodo({ title: todoTitle.value });
            toast.success("Задача успешно поставлена!", {
                timeout: 1200,
                position: 'top-center'
            });
        }catch(err){
            console.log(err);
        }
    }

</script>

<template>
    <form @submit.prevent="submitAdd()">
        <div class="flex md:justify-between gap-2 md:flex-row flex-col">
            <CustomInput class="flex-[5]" place-holder="Введите задачу" v-model="todoTitle" />
            <CustomButton class="flex-1"> 
                Добавить
            </CustomButton>
        </div>
    </form>
</template>