<template>
  <Header @toggle-add-task="toggleAddTask" title="Todo list" :showAddTask="showAddTask"> </Header>

  <div v-show="showAddTask">
    <AddTask @add-task="addTask"></AddTask>
  </div>

  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
</template>


<script lang="ts">
//import { RouterLink, RouterView } from 'vue-router'

import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'

export default {
  components:{
    Header,
    Tasks,
    AddTask
  },
  data() {  //data() as a function
    return {  //return an object 
      tasks: [] as any,  //type error
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    addTask(task) {
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id) {
      if (confirm('Are you sure?')) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)  //???
    },
    //vitual url
    async fetchTasks() {
      const res = await fetch("http://172.27.140.57:8900/js/a/index#/js/a/sentiment/sentiment/listData")
      console.log(res)

      const data = await res.json()

      return data
    },/*
    async fetchTask(id) {
      const res = await fetch(`api/takss/${id}`)
      console.log(res)

      const data = await res.json()

      return data
    },*/
    //load sth to server
    /*async addTaskkk(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json', 
        },
        body: JSON.stringify(task),
      })

      
      const data = await res.json()

      this.tasks = [...this.tasks, data]
    }*/
  },
  async created() {
    //this.tasks = await this.fetchTasks()
    this.tasks = [
    {
      id: 1,
      text: "Leanne Graham",
      day: "Bret",
      reminder: true,
    },
    {
      id: 2,
      text: "Ervin Howell",
      day: "Antonette",
      reminder: false,
    },
    {
      id: 3,
      text: "Leanne Graham",
      day: "Bret",
      reminder: true,
    },
    {
      id: 4,
      text: "Ervin Howell",
      day: "Antonette",
      reminder: false,
    }
    ]
  }
}
</script>






<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
