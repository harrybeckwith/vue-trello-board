<template>
  <div class="container">
    <div class="max-w-screen-sm m-auto">
      <h2 class="font-semibold text-5xl text-center capitalize mt-8">
        {{ currentRouteId }}
      </h2>
      <PostItem v-for="post in blogTopicItems" :key="post.id" :post="post" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import PostItem from "@/components/PostItem.vue";
export default {
  components: {
    PostItem
  },
  data() {
    return {
      blogTopicItems: []
    };
  },
  computed: {
    ...mapGetters("devTo", [
      "devToData"
      // Here you can import other getters from the products.js
    ]),
    currentRouteId() {
      return this.$route.params.id;
    }
  },
  methods: {
    ...mapActions("devTo", ["storeDevToData"]),
    callDevTo() {
      // get my blog data
      fetch("https://dev.to/api/articles?username=hjames")
        .then(response => response.json())
        .then(data => data)
        .then(blogData => {
          // filtler blog data based on clicked route eg 'vue'
          // if matching tag in blog data display these posts
          const filterByParams = blogData.filter(item => {
            return item.tags.includes(this.currentRouteId);
          });
          this.blogTopicItems = filterByParams;
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {
    this.callDevTo();
  }
};
</script>
