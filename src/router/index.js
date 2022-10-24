import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import HandbookView from "@/views/HandbookView.vue";
import FeedView from "@/views/FeedView.vue";
import ContactsView from "@/views/ContactsView.vue";
import JobsView from "@/views/JobsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/handbook",
    name: "Handbook",
    component: HandbookView,
  },
  {
    path: "/feed",
    name: "Feed",
    component: FeedView,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: ContactsView,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: JobsView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
