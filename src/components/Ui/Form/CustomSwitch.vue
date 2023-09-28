<script setup>
import { ref } from 'vue';

    const props = defineProps({
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    })
    const switchValue = ref(props.active | false)
</script>
<template>
    <div 
    :class="`h-3 w-12 relative ${disabled ? 'bg-warning' : !switchValue ? 'bg-secondary-400' : 'bg-success'}`"
    class="rounded-full switch py-1">
        <span :class="!switchValue ? 'disabled' : 'active'" />
    </div>
</template>
<style scoped>
    .switch{
        cursor: pointer;
        position: relative;
        width: 100%t;
        z-index: 5;
    }

    .switch span{
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;        
        display: block;
        position: absolute;
        transition: 300ms;
        box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
        top: -0.3rem;
        z-index: 10;
    }

    .active{
       margin-left: calc(100% - 21px);
       background: #5CF374;
    }

    .disabled{
        margin-left: 0rem;
        background: #fff;
    }
    
</style>