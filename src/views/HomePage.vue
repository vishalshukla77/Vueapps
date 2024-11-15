<template>
  <div class="home">
    <!-- Input field for adding a new task -->
    <v-text-field
      v-model="newTaskTitle"
      class="pa-3"
      outlined
      label="Add task"
      append-icon="mdi-plus"
      hide-details
      clearable
      @click:append="addTask"
    ></v-text-field>

    <!-- Task list display -->
    <v-list v-if="tasks.length" class="pt-0">
      <div v-for="task in tasks" :key="task.id">
        <v-list-item @click="doneTask(task.id)" :class="{ blue: task.done }">
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                v-model="task.done"
                color="primary"
                @change="doneTask(task.id)"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click.stop="deleteTask(task.id)">
                <v-icon color="grey lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>

    <!-- Message when there are no tasks -->
    <div v-else class="no-tasks">
      <v-icon size="100" color="primary">mdi-check</v-icon>
      <p>No tasks</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      newTaskTitle: "",
      tasks: [
        { id: 1, title: "Wake Up", done: false },
        { id: 2, title: "Get bananas", done: false },
        { id: 3, title: "Eat bananas", done: false }
      ]
    };
  },
  methods: {
    doneTask(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    addTask() {
      if (this.newTaskTitle.trim()) {
        const newTask = {
          id: this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1,
          title: this.newTaskTitle.trim(),
          done: false
        };
        this.tasks.push(newTask);
        this.newTaskTitle = ""; // Clear input field
      }
    }
  }
};
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}
.blue {
  background-color: blue;
}
.no-tasks {
  text-align: center;
  margin-top: 20px;
  color: grey;
}
</style>
