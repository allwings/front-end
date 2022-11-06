<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @btn-click="$emit('toggle-add-task')" 
                :text="showAddTask ? 'Close' : 'Add Task'" 
                :color="showAddTask ? 'red' : 'green'"> </Button>
    </header>
</template>


<script lang="ts">
import Button from './Button.vue'


export default {
    name: 'Header',
    //props: ['title']
    props: {
        title: {
            type: String,
            default: "hello world",
        },
        showAddTask: Boolean,
    },
    components: {
        Button
    },
    computed: {
        
    }
}
</script>







<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>
