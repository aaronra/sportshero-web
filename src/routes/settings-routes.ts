// Settings
const SettingsView = () => import(/* webpackChunkName: "Settings" */ '@/views/Settings/Settings.vue');
const FlaggedMessages = () => import(/* webpackChunkName: "FlaggedMessages" */ '@/components/SettingsComponents/FlaggedMessages/FlaggedMessages.vue');

export const settingsRoutes = {
  redirect: '',
  path: '/settings',
  component: SettingsView,
  children: [
    {
      path: '',
      name: 'FlaggedMessages',
      component: FlaggedMessages,
    },
  ],
};
