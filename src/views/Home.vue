<template>
  <div class="container">
    <div class="flex justify-between">
      <CardComponent
        v-for="topic in blogTopics"
        :key="topic.title"
        :image-url="topic.logo"
        :title="topic.title"
      >
      </CardComponent>
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      blogTopics: [
        { title: "vue", logo: require("@/assets/images/logos/vue.png") },
        { title: "php", logo: require("@/assets/images/logos/vue.png") },
        { title: "scss", logo: require("@/assets/images/logos/vue.png") }
      ]
    };
  },
  components: {
    CardComponent
  }
};
</script>
