<template>
  <div class="flex justify-between">
    <CardComponent
      v-for="topic in blogTopics"
      :key="topic.title"
      :image-url="topic.logo"
      :title="topic.title"
    >
    </CardComponent>
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
  },
  computed: {
    ...mapGetters("devTo", [
      "devToData"
      // Here you can import other getters from the products.js
    ])
  },
  methods: {
    ...mapActions("devTo", ["storeDevToData"]),
    callDevTo() {
      fetch("https://dev.to/api/articles?username=hjames")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.storeDevToData(data);
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {
    this.callDevTo();
  }
};
</script>
