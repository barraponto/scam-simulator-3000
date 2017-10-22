<template>
  <div class="mail-container">
    <div class="mail-header">
      <div class="mail-subject">{{message.subject}}</div>
      <div class="mail-sender">De: {{message.name}} ({{message.from}})</div>
      <div class="mail-date">{{message.date}}</div>
    </div>
    <div class="mail-content">{{message.text}}</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'EmailView',
    components: { },
    props: ['id'],
    computed: {
      ...mapGetters(['messages']),
      message() { return this.messages.find(m => m.id === this.id); },
    },
  };
</script>

<style>
  .mail-container {
    margin-top: 5px;
    border: 1px solid #eee;
    border-radius: 0.33em;
  }
  .mail-header {
    padding: 3%;
    border-bottom: 1px solid #ccc;
  }
  .mail-subject {
    font: 2.5em small-caps bolder, sans-serif;
    margin-bottom: 0.5em;
  }
  .mail-sender {
    color: #444;
    display: inline-block;
    width: 70%;
  }
  .mail-date {
    color: #444;
    float: right;
    text-align: right;
    display: inline-block;
    width: 30%;
  }
  .mail-content {
    margin: 3%;
  }
</style>
