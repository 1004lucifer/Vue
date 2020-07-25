<template>
  <IonVuePage :title="'Modal'">
    <ion-button @click="openModal">Open Modal</ion-button>
  </IonVuePage>
</template>

<script>
import IonVuePage from '@/components/IonVuePage';

export default {
  name: 'Modal',
  components: {
    IonVuePage
  },
  mounted() {
    this.$on('close', () => {
      this.$ionic.modalController.dismiss();
    });
  },
  methods: {
    openModal() {
      return this.$ionic.modalController
        .create({
          component: () => import('@/components/modal/index.vue'),
          componentProps: {
            parent: this,
            data: {
              content: 'New Content',
            },
            propsData: {
              title: 'New title',
              closeMe: () => {
                this.$ionic.modalController.dismiss();
              },
            },
          },
        })
        .then(m => m.present());
    },
  },
};
</script>
