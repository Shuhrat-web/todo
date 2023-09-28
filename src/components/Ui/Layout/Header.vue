<script setup>
  import Title from '../../Ui/Typography/Title.vue';
  import Logo from '../Logo.vue';
  import CustomButton from '../Buttons/CustomButton.vue';
  defineEmits(['refreshTodos'])
  
</script>

<template>
  <div class="bg-secondary-100 py-4">
    <div class="main__container flex justify-between items-center">
      <Title type="primary" size="xl" weight="bold">Todo-App</Title>
      <div class="flex gap-2">
        <Logo color="primary"  width="35" height="30" />
        <CustomButton @click="$emit('refreshTodos')" type="warning" flat>Обновить</CustomButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
