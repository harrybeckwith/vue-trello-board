<template>
  <div class="bg-white dark:bg-black">
    <h2>Date</h2>
    <textarea class="notepad dark:text-white" v-model="text" @keyup="setLocalStorage">
    </textarea>
  </div>
</template>
<script>
export default {
  name: "Notes",
  data() {
    return {
      text: "",
      dark: false
    };
  },
  methods: {
    setLocalStorage() {
      window.localStorage.setItem("userText", this.text);
    },
  },
  mounted() {
   
    if (window.localStorage.getItem("userText")) {
      this.text = window.localStorage.getItem("userText");
    }
  }
};
</script>
<style>
.notepad {
  width: 90%;
  border: 1px solid grey;
  height: 90vh;
  padding: 20px;
  appearance: none;
  background: transparent;
  border: none;
  flex: 1 1 100%;
  font-family: var(--fontStack) !important;
  margin-bottom: 1.5rem;
  outline: none;
  padding-top: 1.5rem;
  resize: none;
  font-size: 18px;
}
</style>
