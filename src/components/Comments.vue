<template>
  <v-sheet width="1100" class="mx-auto">
    <v-form @submit.prevent>
      <v-textarea
        v-model="comment"
        :rules="rules"
        label="Write Comment"
      ></v-textarea>
      <p>Data recieved from parent {{ propName }}</p>

      <v-btn
        style="background-color: black; color: white"
        type="submit"
        block
        class="mt-2"
        @click="submitHandlerFetch"
        >Submit</v-btn
      >
    </v-form>
  </v-sheet>
</template>
<script>
import axios from "axios";

export default {
  methods: {
    submitHandlerFetch() {
      const response = fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          comment: this.comment,
          postId: this.propName,
        }),
      });

      console.log(response);
    },
  },
  props: {
    propName: Number,
  },
  data: () => ({
    comment: "",
    rules: [
      (value) => {
        if (value) return true;

        return "You must enter a comment.";
      },
    ],
  }),
};
</script>
