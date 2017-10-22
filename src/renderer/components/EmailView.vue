<template>
  <p>{{message.text}}</p>
</template>

<script>
  export default {
    name: 'EmailView',
    components: { },
    props: ['id'],
    computed: {
      message() {
        return this.$store.state.Inbox.messages[this.id];
      },
    },
  };
</script>

<style>
</style>
