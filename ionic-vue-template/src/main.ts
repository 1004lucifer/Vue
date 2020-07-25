import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@ionic/core/css/ionic.bundle.css';
import IonicVue from '@ionic/vue';

Vue.use(IonicVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
