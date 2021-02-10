<template>
  <div
    @click="toPost"
    class="flex justify-center shadow pt-5 pb-5 ml-5 mr-5 mt-10 w-1/3"
  >
    <h2 class="font-semibold text-3xl text-center capitalize">{{ title }}</h2>
    <img :src="imageUrl" width="150px" />
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  },
  methods: {
    toPost() {
      this.$router.push({
        path: `/posts/${this.title}`
      });
    }
  }
};
</script>
