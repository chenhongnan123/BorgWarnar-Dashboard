import Dashboard from './pages/Dashboard.vue';
import Setting from './pages/Setting.vue';
const routes = [
  {
    path:'/',
    component:Dashboard,
  },
  {
    path:'/setting',
    component:Setting,
  },
]

export default { routes }