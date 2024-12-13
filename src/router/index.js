import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'


// Import your components
const HomePage = () => import('../components/HomePage.vue');

const routes = [
  {
    path: '/', // Ensure this is '/' for the root path
    name: 'HomePage',
    component: HomePage
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
