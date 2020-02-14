export default [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "MainLayout" */ '@/Layout/PublicLayout/PublicLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Login',
        component: () => import(/* webpackChunkName: "MainLayout" */ '@/Layout/PublicLayout/Login/Login.vue'),
        meta: {public: true},
      },
      {
        path: '/ForgotPassword',
        name: 'ForgotPassword',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "MainLayout" */ '@/Layout/PublicLayout/ForgotPassword/ForgotPassword.vue'),
        meta: {public: true},
      },
      {
        path: '*',
        redirect: {name: 'Login'},
      },
    ],
  },
];
