<template>
  <div class="post-list">
    <v-container>
      <v-row>
        <v-col v-for="post in posts" :key="post.id" cols="12" md="6" lg="4">
          <v-card
            @click="navigateToProductDetail(post.id)"
            class="post-card"
            elevation="2"
          >
            <v-img :src="post.image" height="200"></v-img>
            <v-card-title class="text-h6">{{ post.title }}</v-card-title>
            <v-card-text>{{ post.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    navigateToProductDetail(postId) {
      // Navigate to the SinglePost component with the specific product ID
      this.$router.push({ name: "SinglePost", params: { id: postId } });
      console.log("The post id", postId);
    },
  },
  created() {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        this.posts = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Posts:", error);
      });
  },
  data() {
    return {
      posts: [],
    };
  },
};
</script>

<style scoped>
.post-list {
  padding: 20px;
}

.post-card {
  margin-bottom: 20px;
}
</style>
