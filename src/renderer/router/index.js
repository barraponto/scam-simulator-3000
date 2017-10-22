import Vue from 'vue';
import Router from 'vue-router';
import Inbox from '@/components/Inbox';
import MailBox from '@/components/MailBox';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inbox',
      component: Inbox,
      children: [
        {
          name: 'Main',
          path: '/',
          component: MailBox,
        },
        {
          name: 'MailBox',
          path: 'label/:label?',
          component: MailBox,
          props: true,
        },
        {
          name: 'Message',
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
