// Settings
const GuildManagementView = () => import(/* webpackChunkName: "GuildManagementView" */ '@/views/GuildManagement/GuildManagement.vue');
const GuildManagement = () => import(/* webpackChunkName: "GuildManagement" */ '@/components/GuildManagementComponents/GuildManagement/GuildManagement.vue');
const GuildProfile = () => import(/* webpackChunkName: "GuildProfile" */ '@/components/GuildManagementComponents/GuildProfile/GuildProfile.vue');
export const guildManagementRoutes = {
  redirect: '',
  path: '/guild-management',
  component: GuildManagementView,
  children: [
    {
      path: '',
      name: 'GuildManagement',
      component: GuildManagement,
    },
    {
      path: 'guild/:id',
      name: 'GuildManagement.Profile',
      component: GuildProfile,
    },
  ],
};
