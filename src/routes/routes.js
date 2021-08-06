import Home from '../components/Home.component.vue';
import Users from '../components/TotalAgeUsers.component.vue';
import AdminUsers from '../components/AdminUsers.component.vue';

export const routes = [
  {path: '/', component: Home},
  {path: '/user/admin', component: AdminUsers},
  {path: '/user/:id', component: Users},
]