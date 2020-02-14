import {
  MainLayout,
  Dashboard,
  Racing,
  RacingMultiBets,
  Sports,
  SportsMultiBets,
} from './main-index';
import {settingsRoutes} from './settings-routes';
import {avatarManagementRoutes} from '@/routes/avatar-management-routes';
import {guildManagementRoutes} from '@/routes/guild-management-routes';
export default [
  {
    path: '/dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MainLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      // Racing
      {
        path: '/racing',
        name: 'Racing',
        component: Racing,
      },
      {
        path: '/racing/racing-multi-bets',
        name: 'Racing.MultiBets',
        component: RacingMultiBets,
      },
      // Sports
      {
        path: '/sports',
        name: 'Sports',
        component: Sports,
      },
      {
        path: '/sports/sports-multi-bets',
        name: 'Sports.MultiBets',
        component: SportsMultiBets,
      },
      avatarManagementRoutes,
      settingsRoutes,
      guildManagementRoutes,
    ],
  },
];
