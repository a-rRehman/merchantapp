<template>
  <v-container class="main mt-16">
    <p class="text-h4">Login Form</p>
    <v-sheet width="400">
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="email"
          outlined
          dense
          color="blue"
          :rules="emailRules"
          label="Email"
          class="mt-4"
        ></v-text-field>
        <v-text-field
          v-model="password"
          outlined
          dense
          color="blue"
          class="mt-4"
          :rules="passwordRules"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        >
        </v-text-field>
        <v-btn type="submit" @click="submitHandlerFetch" block class="mt-2"
          >Submit</v-btn
        >
      </v-form>
    </v-sheet>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    password: "",
    email: "",
    showPassword: false,

    passwordRules: [
      (value) => {
        if (value?.length > 8) return true;

        return "Password must be at least 8 characters";
      },
    ],

    emailRules: [
      (value) => {
        if (/^[a-z0-9.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

        return "Must be a valid e-mail.";
      },
    ],
  }),

  methods: {
    submitHandlerFetch() {
      const response = fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });

      console.log(response);
    },
    async submitHandlerAxios() {
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      console.warn(this.email, this.password);
    },
  },
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
