<template>
  <div class="flex justify-center shadow pt-5 pb-5 mt-10 post-item">
    <a :href="post.canonical_url" target="_blank">
      <div class="flex post-item__container content-center">
        <div>
          <h2 class="font-semibold text-3xl ">{{ post.title }}</h2>
          <p class="font-light text-gray-600">{{ post.description }}</p>
          <div class="flex">
            <p class="font-light text-gray-500 mr-4">
              {{ post.readable_publish_date }}
            </p>
            <p class="font-light text-gray-500">
              Likes: {{ post.positive_reactions_count }}
            </p>
          </div>
        </div>
        <div class="ml-4">
          <img :src="post.cover_image" width="250px" />
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
.post-item {
  margin-left: 10px;
  margin-right: 10px;
}

.post-item__container {
  flex-direction: column-reverse;
  text-align: center;
}
@media (min-width: 768px) {
  .post-item__container {
    flex-direction: row;
  }
  .post-item {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 1024px) { 
  .post-item {
    width: 60%;
  }
  
 }
</style>
