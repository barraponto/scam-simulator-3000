<template>
  <div class="emails">
    <email-item v-for="message in filtered"
      :message="message" :key="message.id" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import EmailItem from '@/components/EmailItem';

  export default {
    name: 'MailBox',
    components: { 'email-item': EmailItem },
    props: ['label'],
    computed: {
      ...mapGetters(['withLabel', 'messages']),
      filtered() {
        return this.label ? this.withLabel(this.label) : this.messages;
      },
    },
  };
</script>

<style>
</style>
