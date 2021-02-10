<template>
    <div class="flex justify-center shadow pt-5 pb-5 ml-5 mr-5 mt-10 w-1/3">
      <router-link :to="`/posts/${title}`">
        <h2 class="font-semibold text-3xl text-center capitalize">{{ title }}</h2>
        <img :src="imageUrl" width="150px" />
      </router-link>
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
    }
  };
  </script>
  