const DashboardBets = () => import(/* webpackPrefetch: 2, webpackChunkName: "DashboardBets" */ './DashboardBets/DashboardBets.vue');
const DashboardTrends = () => import(/* webpackPrefetch: 1, webpackChunkName: "DashboardTrends" */ './DashboardTrends/DashboardTrends.vue');
const DashboardUpcomings = () => import(/* webpackPrefetch: 0, webpackChunkName: "DashboardUpcomings" */ './DashboardUpcomings/DashboardUpcomings.vue');

export {
  DashboardBets,
  DashboardTrends,
  DashboardUpcomings,
};
