import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: 'AvatarList',
  components: {},
})
export default class AvatarList extends Vue {
  // Component Props
  @Prop(Array) readonly avatarList: any[] | undefined;
  // Data property

  // Lifecycle hook

  // Component method
  getImgUrl(icon: string) {
    const imgUrl = require('@/assets/avatars/' + icon);
    return imgUrl;
  }
}
