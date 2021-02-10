<template>
    <div class="max-w-screen-sm m-auto">
      <h2 class="font-semibold text-3xl text-center capitalize">
        {{ currentRouteId }}
      </h2>
      <div
        class="flex justify-center shadow pt-5 pb-5 m-auto mt-10"
        v-for="post in blogTopicItems"
        :key="post.id"
      >
        <a :href="post.canonical_url" target="_blank">
          <div class="flex">
            <div>
              <h2 class="font-semibold text-3xl">{{ post.title }}</h2>
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
    </div>
  </template>
  <script>
  import { mapGetters } from "vuex";
  export default {
    data() {
      return {
        blogTopicItems: []
      };
    },
    computed: {
      ...mapGetters('devTo',[
        "devToData"
        // Here you can import other getters from the products.js
      ]),
      currentRouteId() {
        return this.$route.params.id;
      }
    },
    mounted() {
      const filterByParams = this.devToData.filter(item => {
        return item.tags.includes(this.currentRouteId);
      });
      this.blogTopicItems = filterByParams;
    }
  };
  </script>
  