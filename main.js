import { createApp } from 'vue';
import { createWebHashHistory, createRouter } from 'vue-router'

import App          from "@/App.vue";
import PageNotFound from "@/PageNotFound.vue";

import RootView     from "@/pages/Root.vue";
import AboutView    from "@/pages/About.vue";
import BlogView     from "@/pages/Blog.vue";
import PostView     from "@/pages/Post.vue";
import FriendsView  from "@/pages/Friends.vue";
import ProjectsView from "@/pages/Projects.vue";
import ResumeView   from "@/pages/Resume.vue";

const routes = [
  { path: '/',                component: RootView },
  { path: '/about',           component: AboutView },
  { path: '/blog',            component: BlogView },
  { path: '/blog/:id',        component: PostView },
  { path: '/friends',        component: FriendsView },
  { path: '/projects',        component: ProjectsView },
  { path: '/resume',          component: ResumeView },
  { path: '/:catchAll(.*)',   component: PageNotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      };
    }
    return { x: 0, y: 0 };
  },
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');