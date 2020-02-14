// Settings
const AvatarManagementView = () => import(/* webpackChunkName: "AvatarManagementView" */ '@/views/AvatarManagement/AvatarManagement.vue');
const AvatarManagementComponent = () => import(/* webpackChunkName: "AvatarManagementComponent" */ '@/components/AvatarManagementComponents/AvatarManagement/AvatarManagementComponent.vue');
const AvatarManagementProfile = () => import(/* webpackChunkName: "AvatarManagementProfile" */ '@/components/AvatarManagementComponents/AvatarProfile/AvatarProfile.vue');

export const avatarManagementRoutes = {
  redirect: '',
  path: '/avatar-management',
  component: AvatarManagementView,
  children: [
    {
      path: '',
      name: 'AvatarManagement',
      component: AvatarManagementComponent,
    },
    {
      path: 'profile',
      name: 'AvatarManagement.Profile',
      component: AvatarManagementProfile,
    },
  ],
};
