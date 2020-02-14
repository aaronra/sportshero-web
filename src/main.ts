import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import i18n from './i18n';
import './MainImports/buefy';
import './MainImports/vueSweetAlert';
import '@/assets/fontawesome-pro-5.11.2-web/css/all.css';
import './stylesheets/main.scss';
import {sync} from 'vuex-router-sync';
import 'flatpickr/dist/flatpickr.css';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import {firebaseConfig} from './MainImports/firebaseConfig';
// Main Imports

// @ts-ignore
import {VTooltip, VPopover, VClosePopover} from 'v-tooltip';

Vue.directive('tooltip', VTooltip);
Vue.directive('close-popover', VClosePopover);
Vue.component('v-popover', VPopover);
Vue.config.productionTip = false;
sync(store, router);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let app: import('vue/types/vue').CombinedVueInstance<Vue, object, object, object, Record<never, any>>;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      i18n,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
