<template>
    <form @submit="onSubmit" class="add-form">

        <div class="form-control">
            <label>Task</label>
            <input type="text" v-model="text" name="text" placeholder="Add task"/>
        </div>
        {{ text }}  <!--2 way binding to above-->

        <div class="form-control">
            <label>Day & Time</label>
            <input type="text" v-model="day" name="day" placeholder="Add Day & Time"/>
        </div>

        <div class="form-control">
            <label>Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder"/>
        </div>
        
        <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
</template>


<script lang="ts">
    export default {
        name: 'AddTask',
        data() {
            return {
                text: '',
                day: '',
                reminder: false,
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault()

                if(!this.text) {
                    alert('Please add a task')
                    return
                }

                const newTask = {
                    id: Math.floor(Math.random() * 100000),
                    text: this.text,
                    day: this.day,
                    reminder: this.reminder
                }

                console.log(newTask)
                this.$emit('add-task', newTask)

                this.text= ''
                this.day= ''
                this.reminder= false
            }
        }
    }
</script>