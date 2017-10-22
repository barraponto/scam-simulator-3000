import Vue from 'vue';
import Router from 'vue-router';
import Inbox from '@/components/Inbox';
import MailBox from '@/components/MailBox';
import EmailView from '@/components/EmailView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Inbox,
      children: [
        {
          name: 'Inbox',
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
          component: EmailView,
          props: true,
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
