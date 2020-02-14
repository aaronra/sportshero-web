import Vue from 'vue';
import Router from 'vue-router';
import MainRoutes from './routes/main-routes';
import PublicRoutes from './routes/public-routes';
import * as firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...MainRoutes,
    ...PublicRoutes,
  ],
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.public);
    const isAuthenticated = firebase.auth().currentUser;
    if (!requiresAuth && !isAuthenticated) {
      next({name: 'Login'});
    } else if (requiresAuth && isAuthenticated) {
      next({name: 'Dashboard'});
    } else {
      next();
    }
  },
);


export default router;
