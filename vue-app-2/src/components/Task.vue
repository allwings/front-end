<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>{{ task.text }}
            <i @click="onDelete(task.id)" class="fa-light fa-xmark"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Task',
        props: {
            task: Object,
        },
        methods: {
            onDelete(id) {
                this.$emit('delete-task', id)
            },
        },
        //emits: ['delete-task'],
    }
</script>




<style scope>
.fa-xmark {
    color: red;
}

.task{
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

.task.reminder {
    border-left: 5px solid green;
}
</style>