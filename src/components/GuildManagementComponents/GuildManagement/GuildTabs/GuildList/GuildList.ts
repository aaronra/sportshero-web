import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: 'GuildList',
  components: {},
})
export default class GuildList extends Vue {
  // Component Props
  // Data property
  avatarList = [
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
    'https://bulma.io/images/placeholders/128x128.png',
  ];
  total = this.avatarList.length;
  current = 1;
  perPage = 13;
  isRounded = false;
  prevIcon = 'chevron-left';
  nextIcon = 'chevron-right';
  // Lifecycle hook

  // Component method
  getImgUrl(icon: string) {
    const imgUrl = require('@/assets/avatars/' + icon);
    return imgUrl;
  }

  paginatedItems() {
    const pageNumber = this.current - 1;
    return this.avatarList.slice(pageNumber * this.perPage, (pageNumber + 1) * this.perPage);

  }
}
