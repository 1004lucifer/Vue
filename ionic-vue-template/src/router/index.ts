import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { IonicVueRouter } from '@ionic/vue';
import Index from '@/views/example/Index.vue';
import Home from '@/views/example/Home.vue';

Vue.use(IonicVueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    redirect: '/example',
    // component: Index
  },
  {
    path: '/example',
    name: 'example',
    component: Index,
    children: [
      {
        path: '',
        name: 'ExampleIndex',
        // component: Home
        component: () => import('@/views/example/Home.vue')
      },
      {
        path: 'action-sheet',
        name: 'ActionSheet',
        component: () => import('@/views/example/ActionSheet.vue')
      },
      {
        path: 'alert',
        name: 'Alert',
        component: () => import('@/views/example/Alert.vue')
      },
      {
        path: 'loading',
        name: 'Loading',
        component: () => import('@/views/example/Loading.vue')
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/example/Menu.vue')
      },
      {
        path: 'modal',
        name: 'Modal',
        component: () => import('@/views/example/Modal.vue')
      },
      {
        path: 'popover',
        name: 'Popover',
        component: () => import('@/views/example/Popover.vue')
      },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
