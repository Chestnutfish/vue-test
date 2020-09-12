import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from '../views/About.vue';
import Book from '../views/Book.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/book",
    component: Book
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
