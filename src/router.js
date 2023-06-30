import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../src/views/Home.vue'
import Contact from '../src/pages/Contact.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
]

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;