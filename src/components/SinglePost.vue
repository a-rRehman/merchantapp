<template>
  <div class="single-post">
    <v-container>
      <v-card class="post-card" elevation="2">
        <v-img :src="post.image" height="400"></v-img>
        <v-card-title class="text-h6">{{ post.title }}</v-card-title>
        <v-card-text>{{ post.description }}</v-card-text>
      </v-card>
      <Comments :propName="dataToPass" />
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import Comments from "./Comments.vue";
export default {
  components: {
    Comments,
  },
  data() {
    return {
      post: [],
      dataToPass: null,
      // This will hold the selected post
    };
  },

  mounted() {
    const postId = this.$route.params.id; // Assuming the route parameter is named "id"
    console.log(postId);
    axios
      .get(`http://localhost:3000/posts/${postId}`)
      .then((response) => {
        this.post = response.data;
        this.dataToPass = postId;
      })
      .catch((error) => {
        console.error("Error fetching Post:", error);
      });
  },
};
</script>

<style scoped>
.single-post {
  padding: 20px;
}

.post-card {
  margin-bottom: 20px;
}
</style>
