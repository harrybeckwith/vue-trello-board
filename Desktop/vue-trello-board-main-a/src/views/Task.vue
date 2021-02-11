<template>
  <div class="task-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <input
        type="text"
        class="p-2 w-full mr-2 block text-xl font-bold"
        :value="task.name"
        @change="updateTaskProperty($event, 'name')"
        @keyup.enter="updateTaskProperty($event, 'name')"
      />

      <textarea
        class="relative w-full bg-transparent px-2 border mt-2 h-64 border-none leading-normal"
        :value="task.description"
        @change="updateTaskProperty($event, 'description')"
      />
      <p @click="deleteTask">Delete</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters('trelloBoard',["getTask"]),
    task() {
      return this.getTask(this.$route.params.id);
    },
    taskIndex() {
      return this.$route.params.taskIndex;
    },
    columnIndex() {
      return this.$route.params.columnIndex;
    }
  },
  methods: {
    updateTaskProperty(e, key) {
      this.$store.commit("trelloBoard/UPDATE_TASK", {
        task: this.task,
        key,
        value: e.target.value
      });
    },
    deleteTask() {
      this.$store.commit("trelloBoard/DELETE_TASK", {
        taskIndex: this.taskIndex,
        columnIndex: this.columnIndex
      }) 
      this.$router.push({name:'board'});
    }
  }
};
</script>

<style>
.task-view {
  @apply relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
