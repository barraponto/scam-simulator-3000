import Vue from 'vue';
import Router from 'vue-router';
import Inbox from '@/components/Inbox';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inbox',
      component: Inbox,
      children: [
        {
          path: 'label/:label',
          component: Inbox,
        },
        {
          path: 'message/:id',
          component: Inbox,
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
