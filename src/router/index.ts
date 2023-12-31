import { createRouter, createWebHistory } from 'vue-router';
// import AppView1 from '@/views/AppView1.vue';
import HomePage from '@/components/HomePage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage
		},
	]
});

export default router;
