import { createWebHistory, createRouter } from "vue-router";

import Login from "../components/Login.vue";
import AddingPost from "../components/AddingPost.vue";
import DisplayingPost from "../components/DisplayingPost.vue";
import SinglePost from "../components/SinglePost.vue";
import Test from "../components/Test.vue";

const routes = [
  {
    name: "Login",
    path: "/",
    component: Login,
  },
  {
    name: "Test",
    path: "/Test",
    component: Test,
  },

  {
    name: "AddingPost",
    path: "/AddingPost",
    component: AddingPost,
  },

  {
    name: "DisplayingPost",
    path: "/DisplayingPost",
    component: DisplayingPost,
  },

  {
    name: "SinglePost",
    path: "/SinglePost/:id",
    component: SinglePost,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
