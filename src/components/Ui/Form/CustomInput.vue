<script setup>

    defineProps({
        modelValue:{
            type: String
        },
        type: {
            type: String,
            default: 'success'
        },
        placeHolder: {
            type: String
        }
    })
    defineEmits(['update:modelValue'])

    const settings = {
        type: {
            success: 'border-b-2 border-success',
            warning: 'border-b-2 border-warning',
            secondary: 'border-b-2 border-secondary-400',
            primary: 'border-b-2 border-primary',
        }
    }

</script>

<template>
  <input
    class="border-b-2 bg-transparent border-success focus:outline-none"
    :placeholder="placeHolder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>