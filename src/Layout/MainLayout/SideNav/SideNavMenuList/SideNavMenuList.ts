import {Component, Vue} from 'vue-property-decorator';
import {mainStoreModule} from '@/stores/MainStore';

@Component({
    name: 'SideNavMenuList',
    components: {},
})
export default class SideNavMenuList extends Vue {
    // Component Props

    // Data property
    get navIsActive() {
        return mainStoreModule.navIsActive;
    }

    windowWidth = 0;

    // Lifecycle hook
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        this.showSideNav();
    }

    // Component method

    handleResize() {
        this.windowWidth = window.innerWidth;
    }

    showSideNav() {
        if (this.windowWidth < 1024) {
            mainStoreModule.toggleNav(this.navIsActive);
        }
    }
}
