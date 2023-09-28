<script setup>
    defineProps({
        type: {
            type: String,
            default: 'secondary'
        },
        weight:{
            type: String,
            default: 'medium'
        },
        size: {
            type: String,
            default: 'md'
        }
    })

    
    let settings = {
        type: {
            secondary: 'text-secondary-400',
            success: 'text-success',
            danger: 'text-danger',
            dark: 'text-dark',
            primary: 'text-primary',
            warning: 'text-warning'
        },
        weight: {
            bold: 'font-bold',
            light: 'font-light',
            medium: 'font-medium'
        },
        size:{
            md: 'text-md',
            sm: 'text-sm',
            lg: 'text-lg',
            xl: 'text-2xl',
            '8xl': 'text-8xl'
        }
    }
</script>
<template>
  <h3 
  :class="`
    ${settings.type[type]}
    ${settings.weight[weight]}
    ${settings.size[size]}
  `">
    <slot>
    </slot>
  </h3>
</template>