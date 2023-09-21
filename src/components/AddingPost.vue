<template>
  <v-container>
    <v-row style="margin-top: 5%">
      <v-col cols="6" offset="3">
        <v-card class="post-form-card" elevation="2">
          <v-card-title style="margin-top: 20px" class="text-h4 text-center"
            >Create a New Post</v-card-title
          >
          <v-form
            ref="postForm"
            @submit.prevent="submitPost"
            style="
              margin-top: 30px;
              margin-bottom: 30px;
              margin-left: 30px;
              margin-right: 30px;
            "
          >
            <v-text-field v-model="title" label="Title" required></v-text-field>
            <v-textarea
              v-model="description"
              label="Description"
              required
            ></v-textarea>
            <v-btn style="width: 100%" type="submit" color="primary"
              >Submit</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },

  methods: {
    submitPost() {
      console.log(this.$refs["uploadImage"]);
      const response = fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
        }),
      });
      console.log(response);
      // Clear the entire form
      this.$refs["postForm"].reset();
    },
  },
};
</script>
