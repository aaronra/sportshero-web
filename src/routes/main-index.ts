const MainLayout = () => import(/* webpackChunkName: "MainLayout" */ '@/Layout/MainLayout/MainLayout.vue');
const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard/Dashboard.vue');
// Racing
const Racing = () => import(/* webpackChunkName: "Racing" */ '@/views/Racing/Racing.vue');
const RacingMultiBets = () => import(/* webpackChunkName: "RacingMultiBets" */ '@/views/Racing/RacingMultiBets/RacingMultiBets.vue');
// Sports
const Sports = () => import(/* webpackChunkName: "Sports" */ '@/views/Sports/Sports.vue');
const SportsMultiBets = () => import(/* webpackChunkName: "SportsMultiBets" */ '@/views/Sports/SportsMultiBets/SportsMultiBets.vue');

export {
  MainLayout,
  Dashboard,
  Racing,
  RacingMultiBets,
  Sports,
  SportsMultiBets,
};
