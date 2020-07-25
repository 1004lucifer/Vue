<template>
  <IonVuePage :title="'@ionic/vue examples'" :showBackButton="false">
    <ion-list>
      <ion-item v-for="(link, i) in links" :key="i">
        <router-link :to="toUrl(link)">{{ link }}</router-link>
      </ion-item>
    </ion-list>
  </IonVuePage>
</template>

<script>
import IonVuePage from '@/components/IonVuePage';
export default {
  components: {
    IonVuePage
  },
  data() {
    return {
      links: ['Action Sheet', 'Alert', 'Loading', 'Menu', 'Modal', 'Popover'],
    };
  },
  methods: {
    toUrl(str) {
      return '/example/' + str.toLowerCase().replace(' ', '-');
    },
  },
};
</script>
