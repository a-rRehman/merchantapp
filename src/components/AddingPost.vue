<template>
  <v-form ref="postForm" @submit.prevent="submitPost">
    <v-text-field v-model="title" label="Title" required></v-text-field>
    <v-file-input
      v-model="selectedFile"
      label="Upload Image"
      ref="imgg"
      accept="image/*"
    ></v-file-input>
    <v-textarea v-model="description" label="Description" required></v-textarea>
    <v-btn type="submit" color="primary">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      imageFile: null,
      selectedFile: null,
      description: "",
    };
  },

  methods: {
    submitPost() {
      var reader = new FileReader();
      console.log(reader.readAsDataURL(this.$refs.imgg.files[0]));
      // localStorage.setItem("Image", this.imageFile);

      // localStorage.setItem("Image Url", URL.createObjectURL(this.imageFile));

      // console.log(this.$refs["uploadImage"]);
      // const response = fetch("http://localhost:3000/posts", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     title: this.title,
      //     description: this.description,
      //     image: this.imageFile,
      //   }),
      // });
      // console.log(response);
      // // Clear the entire form
      // this.$refs["postForm"].reset();
    },
  },
};
</script>

<!-- 
<template>
  <v-form ref="postForm" @submit.prevent="submitPost">
    <v-text-field v-model="title" label="Title" required></v-text-field>
    <v-file-input
      v-model="imageFile"
      label="Upload Image"
      accept="image/*"
    ></v-file-input>
    <v-textarea v-model="description" label="Description" required></v-textarea>
    <v-btn type="submit" color="primary">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      imageFile: null,
      description: "",
    };
  },

  methods: {
    async submitPost() {
      // Check if an image is selected
      if (!this.imageFile) {
        alert("Please select an image");
        return;
      }

      // Convert the image to a Base64 encoded string
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageBase64 = event.target.result;

        // Send the data to the backend API
        fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: this.title,
            description: this.description,
            image: imageBase64, // Include the Base64 encoded image
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the API
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      };

      reader.readAsDataURL(this.imageFile);

      // Clear the entire form
      this.$refs["postForm"].reset();
    },
  },
};
</script> -->
