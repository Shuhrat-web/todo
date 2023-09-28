<script setup>
    defineProps({
        type:{
            type: String,
            default: 'primary'
        },
        round: {
            type: String,
            default: 'md'
        },
        btn: {
            type: Boolean,
            default: false
        },
        animate: {
            type: Boolean,
            default: true
        },
        size: {
            type: String,
            default: 'md'
        },
        flat: {
            type: Boolean,
            default: false
        },
        outlined:{
            type: Boolean,
            default: false
        },
        block: {
            type: Boolean,
            default: false
        }
    })
    const settings = {
        size: {
            none: 'px-0 py-0',
            custom: ' ',
            sm: 'px-2.5 py-0.5 text-sm',
            lg: 'px-6 py-2',
            xl: 'px-10 py-2',
            md: 'px-3 py-1'
        },
        types: {
            success: 'bg-success text-white',
            secondary: 'bg-secondary-100 text-secondary',
            danger: 'bg-danger text-white',
            warning: 'bg-warning text-white',
            primary: 'bg-primary text-white',
            white: 'bg-white text-black'
        },
        flat:{
            success: 'bg-success bg-opacity-10 text-success',
            secondary: 'bg-secondary-100 bg-opacity-75 text-secondary',
            white: 'bg-secondary-100 bg-opacity-10 text-white',
            danger: 'bg-danger bg-opacity-10 text-danger',
            warning: 'bg-warning bg-opacity-10 text-warning',
            primary: 'bg-primary bg-opacity-10 text-primary'
        },
        outlined:{
            success: 'border border-success text-success hover:text-white hover:bg-success',
            secondary: 'border border-secondary text-secondary hover:text-white hover:bg-secondary-100',
            danger: 'border border-danger text-danger hover:text-white hover:bg-danger',
            warning: 'border border-warning text-warning hover:text-white hover:bg-danger',
            primary: 'border border-primary text-primary  hover:text-white hover:bg-primary'
        },
        radius:{
            lg: 'rounded-lg',
            full: 'rounded-full',
            xl: 'rounded-2xl',
            none: '',
            md: 'rounded-md'
        },                
        animate:'transform scale-100 active:scale-90 transition-all duration-75'
    }
</script>

<template>
    <button 
    :type="btn ? 'button' : ''"
    :class="`${animate && settings.animate} ${ !flat && settings.types[type] && !outlined ? settings.types[type] : flat ? settings.flat[type] : outlined ? settings.outlined[type] : '' } ${settings.radius[round]} ${settings.size[size]} ${block ? 'w-full':''}`">
        <slot />
    </button>
</template>