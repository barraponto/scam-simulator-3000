import Vue from 'vue';
import Router from 'vue-router';
import Inbox from '@/components/Inbox';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inbox',
      component: Inbox,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
