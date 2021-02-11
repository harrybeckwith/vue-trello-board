<template>
  <div
    @click="toPost"
    class="flex flex-col justify-center content-center shadow pt-5 pb-5 ml-5 mr-5 mt-10 w-1/3 cursor-pointer"
  >
    <h2 class="font-semibold text-3xl text-center capitalize">{{ title }}</h2>
    <img :src="imageUrl" width="150px" class="m-auto" />
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
<style lang="css" scoped></style>
