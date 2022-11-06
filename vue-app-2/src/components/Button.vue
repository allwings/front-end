<template>
    <button v-on:click="onClick()" :style="{background: color}">{{ text }}</button>
</template>

<script lang="ts">
export default {
    name: 'Button',
    props: {
        text: String,
        color: String
    },
    methods: {
        onClick() {
            console.log('click')
            this.$emit('btn-click') //emit differently
        }
    }
} 
</script>