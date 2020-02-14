import {Component, Vue} from 'vue-property-decorator';
import {mainStoreModule} from '@/stores/MainStore';
import NavBarEnd from './NavBarEnd/NavBarEnd.vue';

@Component({
    name: 'NavBar',
    components: {
        NavBarEnd,
    },
})
export default class NavBar extends Vue {
    // Component Props

    // Data property

    // Lifecycle hook

    // state getters
    get navIsActive() {
        return mainStoreModule.navIsActive;
    }

    // Component method

    showSideNav() {
        mainStoreModule.toggleNav(this.navIsActive);
    }

}

